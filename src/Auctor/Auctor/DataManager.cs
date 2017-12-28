namespace VolskNet.Auctor
{
    using Common;
    using Domain;
    using Npgsql;
    using Npgsql.Schema;
    using System;
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Reflection;
    using System.Threading.Tasks;

    public class DataManager : IDataManager
    {
        public async Task<IEnumerable<TRecord>> GetRecordsAsync<TRecord>(AuctorTable table)
        {
            using (var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $"SELECT * FROM {AppSettings.DbSchema}.{table.ToString().ToLower()}";

                return await ExecuteAndFormatQuery<TRecord>(cmd);
            }
        }

        public async Task<IEnumerable<TRecord>> GetConsultations<TRecord>(Guid? lecturerGuid)
        {
            using (var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $@"SELECT s.*, r.name as ""room_name"" FROM {AuctorTable.Consultation.ToString().ToLower()} s join {AuctorTable.Room.ToString().ToLower()} r on r.id = s.room_id";
                if (lecturerGuid.HasValue)
                {
                    cmd.CommandText += $" WHERE s.lecturer_id = '{lecturerGuid.Value}'";
                }

                return await ExecuteAndFormatQuery<TRecord>(cmd);
            }
        }

        public async Task<Consultation> GetConsultation(Guid consultationId)
        {
            using (var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $@"SELECT s.*, r.name as ""room_name"" 
                    FROM {AuctorTable.Consultation.ToString().ToLower()} s 
                    join {AuctorTable.Room.ToString().ToLower()} r on r.id = s.room_id
                    WHERE s.id = '{consultationId}'";

                var records = await ExecuteAndFormatQuery<Consultation>(cmd);

                return records.FirstOrDefault();
            }
        }

        public async Task<IEnumerable<TRecord>> ExecuteAndFormatQuery<TRecord>(NpgsqlCommand cmd)
        {
            var records = new List<TRecord>();

            using (var reader = cmd.ExecuteReader())
            {
                var schema = reader.GetColumnSchema();

                while (await reader.ReadAsync())
                {
                    if (!reader.HasRows)
                    {
                        break;
                    }

                    records.Add(MapQueryResult<TRecord>(schema, reader));
                }

            }

            return records;
        }

        private TObject MapQueryResult<TObject>(ReadOnlyCollection<NpgsqlDbColumn> columns, NpgsqlDataReader reader)
        {
            var instance = (TObject)Activator.CreateInstance(typeof(TObject));

            foreach (var column in columns)
            {
                object columnValue = null;
                if (!column.ColumnOrdinal.HasValue)
                {
                    Console.WriteLine("Column has no ordinal value");
                }
                else
                {
                    columnValue = reader.GetValue(column.ColumnOrdinal.Value);
                }

                TrySetPropertyValue(instance, StringUtils.ToPascalCase(column.ColumnName, '_'), columnValue);
            }

            return instance;
        }

        private void TrySetPropertyValue<TObject>(TObject @object, string propertyName, object propertyValue)
        {
            var objectType = typeof(TObject);
            var property = objectType.GetProperty(propertyName, BindingFlags.Public | BindingFlags.Instance);

            if (null == property || !property.CanWrite)
            {
                return;
            }

            object newObject = null;
            try
            {
                newObject = Convert.ChangeType(propertyValue, property.PropertyType);
            }
            catch (InvalidCastException)
            {
                newObject = GetDefault(property.PropertyType);
            }

            property.SetValue(@object, newObject, null);
        }

        public object GetDefault(Type t)
        {
            return this.GetType().GetMethod("GetDefaultGeneric").MakeGenericMethod(t).Invoke(this, null);
        }

        public T GetDefaultGeneric<T>()
        {
            return default(T);
        }

        private Type TryGetPropertyType(Type type, string propertyName)
        {
            var propertyInfos = type.GetProperties();
            var property = propertyInfos.FirstOrDefault(p => p.Name.Equals(propertyName, StringComparison.OrdinalIgnoreCase));

            return property?.PropertyType;
        }
    }
}