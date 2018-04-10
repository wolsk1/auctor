namespace VolskSoft.Npg
{
    using Npgsql;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface INpgProvider
    {
        Task<IEnumerable<TRecord>> GetRecordsAsync<TRecord>(string table);
        Task<IEnumerable<TRecord>> ExecuteAndFormatQuery<TRecord>(NpgsqlCommand cmd);
    }
}
