namespace VolskNet.Auctor
{
    using Domain;
    using System;
    using System.Linq;
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
        [Route("findbyid")]
        public async Task<IHttpActionResult> ById([FromBody] string id)
        {            
            var document = await eventsRepository.FindAsync(Guid.Parse(id));

            return Ok(document.FirstOrDefault());
        }

        [HttpPost]
        [Route("findbyfield")]
        public async Task<IHttpActionResult> ByField([FromBody] string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return BadRequest();
            }

            var documents = await eventsRepository.FindAsync(Guid.Parse(id), "lecturer_id");

            return Ok(documents);
        }
    }
}