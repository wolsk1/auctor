namespace VolskNet.Auctor
{
    using Npgsql;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IDataManager
    {       
        Task<IEnumerable<TRecord>> GetRecordsAsync<TRecord>(AuctorTable table);
        Task<IEnumerable<TRecord>> ExecuteAndFormatQuery<TRecord>(NpgsqlCommand cmd);
    }
}