namespace VolskNet.Auctor.Api
{
    using System;
    using System.Web.Http;
    using System.Threading.Tasks;
    using System.Linq;
    using VolskSoft.Npg;

    [RoutePrefix("clients")]
    public class ClientController : BaseApiController
    {
        private readonly IRepository<Client> consultations;
        private INpgProvider provider;

        public ClientController(
            IRepository<Client> consultations)
        {
            this.consultations = consultations;
            this.provider = new NpgProvider();
        }

        [HttpGet]
        [Route("get")]
        public async Task<IHttpActionResult> List()
        {
            var success = await provider.GetRecordsAsync<Client>("clients");

            return Ok(success);
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Add(Client consultation)
        {
            var success = consultations.Add(consultation);

            return Ok(success);
        }

        [HttpPost]
        [Route("update")]
        public IHttpActionResult Update(Client consultation)
        {            
            return Ok(consultations.Update(consultation));
        }

        [HttpPost]
        [Route("delete")]
        public IHttpActionResult Delete()
        {
            return Ok();
        }

        [HttpPost]
        [Route("findbyid")]
        public async Task<IHttpActionResult> ById([FromBody] string id)
        {
            var document = await consultations.FindAsync(Guid.Parse(id));

            return Ok(document.FirstOrDefault());
        }

        [HttpPost]
        [Route("findbyfield")]
        public async Task<IHttpActionResult> ByField([FromBody] string id)
        {
            var document = await consultations.FindAsync(Guid.Parse(id), "lecturer_id");

            return Ok(document);
        }
    }
}