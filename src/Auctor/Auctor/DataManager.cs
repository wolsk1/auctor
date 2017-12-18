using System.Collections.Generic;
using System.Threading.Tasks;
using VolskNet.Auctor.Domain;

namespace VolskNet.Auctor
{
    public class DataManager : IDataManager
    {
        public async Task<IEnumerable<Faculty>> GetFacultiesAsync()
        {
            using(var cmd = DbHelper.CreateCommand())
            {
                cmd.CommandText = $"SELECT * FROM public.faculty";
                var faculties = new List<Faculty>();

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        if (!reader.HasRows)
                        {
                            break;
                        }
                        
                        faculties.Add(new Faculty()
                        {
                            Id = reader.GetGuid(0),
                            Name = reader.GetString(1),
                            Abbr = reader.GetString(2)
                        });
                    }
                    
                }

                return faculties;
            }
        }

        IEnumerable<Faculty> IDataManager.GetFaculties()
        {
            throw new System.NotImplementedException();
        }
    }
}