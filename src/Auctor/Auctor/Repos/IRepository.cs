namespace VolskNet.Auctor
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    public interface IRepository<TObject>
    {
        bool Add(TObject consultation);
        bool Update(TObject consultation);
        bool Delete(Guid id);
        Task<IEnumerable<TObject>> FindAsync(Guid guid, string idField = "id");
        Task<TObject> FindByIdAsync(Guid id);
    }
}