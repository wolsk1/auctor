namespace VolskNet.Auctor.Api
{
    using Domain;
    using System;
    using System.Web.Http;
    using System.Threading.Tasks;
    using System.Linq;

    [RoutePrefix("consult")]
    public class ConsultationController : BaseApiController
    {
        private readonly IRepository<Consultation> consultations;

        public ConsultationController(
            IRepository<Consultation> consultations)
        {
            this.consultations = consultations;
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Add(Consultation consultation)
        {
            var success = consultations.Add(consultation);

            return Ok(success);
        }

        [HttpPost]
        [Route("update")]
        public IHttpActionResult Update(Consultation consultation)
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