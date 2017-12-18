using System.Collections.Generic;
using System.Threading.Tasks;
using VolskNet.Auctor.Domain;

namespace VolskNet.Auctor
{
    public interface IDataManager
    {
        IEnumerable<Faculty> GetFaculties();

        Task<IEnumerable<Faculty>> GetFacultiesAsync();
    }
}