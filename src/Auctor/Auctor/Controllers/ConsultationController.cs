namespace VolskNet.Auctor
{    
    using System.Web.Http;
    using System.Threading.Tasks;

    [RoutePrefix("consult")]
    public class ConsultationController : BaseApiController
    {
        private readonly IConsultationsManager consultations;

        public ConsultationController(IConsultationsManager consultations)
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
        [Route("find")]
        public async Task<IHttpActionResult> Find([FromBody] string consultationId)
        {            
            var document = await consultations.FindAsync(consultationId);

            return Ok(document);
        }
    }
}