namespace VolskNet.Auctor
{
    using VolskNet.Auctor.Domain;
    using System.Threading.Tasks;
    using System.Web.Http;

    [RoutePrefix("consult")]
    public class ConsultationController : BaseApiController
    {
        private readonly IDataManager dataManager;

        public ConsultationController(IDataManager dataManager)
        {
            this.dataManager = dataManager;
        }

        [HttpPost]
        [Route("add")]
        public async Task<IHttpActionResult> Add(Consultation consultation)
        {
            return Ok();
        }

        [HttpPost]
        [Route("update")]
        public async Task<IHttpActionResult> Update()
        {
            var documents = await dataManager.GetRecordsAsync<Faculty>(AuctorTable.Faculty);

            return Ok(documents);
        }

        [HttpPost]
        [Route("delete")]
        public async Task<IHttpActionResult> Delete()
        {
            var documents = await dataManager.GetRecordsAsync<Faculty>(AuctorTable.Faculty);

            return Ok(documents);
        }
    }
}