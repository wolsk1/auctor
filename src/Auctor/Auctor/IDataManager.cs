namespace VolskNet.Auctor
{
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IDataManager
    {       
        Task<IEnumerable<TRecord>> GetRecordsAsync<TRecord>(AuctorTable table);
    }
}