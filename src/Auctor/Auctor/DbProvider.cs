//namespace VolskNet.Auctor
//{
//    public class DbProvider : IDbProvider
//    {
//        private const string TABLE_COLUMN_NAME_FIELD = "column_name";

//        public void Select(string table, string fieldCondition = "*")
//        {
//            using (var command = DbHelper.CreateCommand())
//            {
//                command.CommandText = $"SELECT {fieldCondition} FROM {table}";
//            }    
//        }

//        public void Insert(string table, string fields)
//        {
//            //using (var builder = DbHelper.GetBuilder(table))
//            //{
//            //    builder.
//            //}

//            using (var cmd = DbHelper.CreateCommand())
//            {                
//                cmd.CommandText = $"INSERT INTO {table} (some_field) VALUES (@p)";
//                cmd.Parameters.AddWithValue("p", "Hello world");
//                cmd.ExecuteNonQuery();
//            }
//        }
//    }
//}