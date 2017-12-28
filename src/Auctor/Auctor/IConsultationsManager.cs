namespace VolskNet.Auctor
{
    using Domain;
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IConsultationsManager
    {
        bool Add(Consultation consultation);
        bool Update(Consultation consultation);
        Task<IEnumerable<Consultation>> FindAsync(string idField, Guid guid);
        Task<Consultation> FindByIdAsync(Guid consultationId);
    }
}