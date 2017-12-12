namespace VolskNet.Auctor
{
    using System.Threading.Tasks;
    using System.Web.Http;

    [RoutePrefix("db")]
    public class DbController : BaseApiController
    {
        private readonly IDataManager dataManager;

        public DbController(IDataManager dataManager)
        {
            this.dataManager = dataManager;
        }

        [HttpGet]
        [Route("faculties")]
        public async Task<IHttpActionResult> GetFaculties()
        {
            var documents = await dataManager.GetFacultiesAsync();

            return Ok(documents);
        }
    }
}