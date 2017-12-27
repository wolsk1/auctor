namespace VolskNet.Auctor
{
    using System.Threading.Tasks;
    using System.Web.Http;

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
        public IHttpActionResult Update()
        {
            return Ok();
        }

        [HttpPost]
        [Route("delete")]
        public IHttpActionResult Delete()
        {
            return Ok();
        }
    }
}