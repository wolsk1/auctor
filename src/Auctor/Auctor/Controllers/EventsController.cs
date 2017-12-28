namespace VolskNet.Auctor
{
    using Domain;
    using System.Web.Http;
    using System.Threading.Tasks;

    [RoutePrefix("events")]
    public class EventsController : BaseApiController
    {
        private readonly IRepository<ConsultationEvent> eventsRepository;

        public EventsController(IRepository<ConsultationEvent> eventsRepository)
        {
            this.eventsRepository = eventsRepository;
        }

        [HttpPost]
        [Route("add")]
        public IHttpActionResult Add(ConsultationEvent item)
        {
            var success = eventsRepository.Add(item);

            return Ok(success);
        }

        [HttpPost]
        [Route("update")]
        public IHttpActionResult Update(ConsultationEvent item)
        {            
            return Ok(eventsRepository.Update(item));
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
            var document = await eventsRepository.FindAsync(System.Guid.Parse(consultationId));

            return Ok(document);
        }
    }
}