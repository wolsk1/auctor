namespace VolskNet.Auctor
{
    using System.Threading.Tasks;

    public interface IConsultationsManager
    {
        bool Add(Consultation consultation);
        bool Update(Consultation consultation);
        Task<Consultation> FindAsync(string consultationId);
    }
}