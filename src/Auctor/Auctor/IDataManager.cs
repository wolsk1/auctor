namespace VolskNet.Auctor
{
    using Npgsql;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IDataManager
    {       
        Task<IEnumerable<TRecord>> GetRecordsAsync<TRecord>(AuctorTable table);
        Task<IEnumerable<TRecord>> ExecuteAndFormatQuery<TRecord>(NpgsqlCommand cmd);
        Task<IEnumerable<TRecord>> GetConsultations<TRecord>(Guid? lecturerGuid);
        Task<Consultation> GetConsultation(Guid consultationId);
    }
}