namespace VolskNet.Auctor.Api
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using VolskNet.Auctor.Db;

    public class ClientRepository : IRepository<Client>
    {
        public bool Add(Client consultation)
        {
            var cmd = DbHelper.CreateCommand(false);
            cmd.CommandText = @"INSERT INTO clients 
                                values(default, @name, @surname, @phone, @email)";

            cmd.AddParam("@name", consultation.Name);
            cmd.AddParam("@surname", consultation.Surname);
            cmd.AddParam("@phone", consultation.Phone);
            cmd.AddParam("@email", consultation.Email);

            return cmd.ExecuteNonQuery() > 0;
        }

        public bool Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Client>> FindAsync(Guid guid, string idField = "id")
        {
            throw new NotImplementedException();
        }

        public Task<Client> FindByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        public bool Update(Client consultation)
        {
            throw new NotImplementedException();
        }
    }
}