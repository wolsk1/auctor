namespace VolskNet.Auctor
{
    using System; 
    using System.Threading.Tasks;

    public interface IRepository<TObject>
    {
        bool Add(TObject consultation);
        bool Update(TObject consultation);
        bool Delete(Guid id);
        Task<TObject> FindAsync(Guid id);
    }
}