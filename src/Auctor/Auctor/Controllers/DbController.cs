namespace VolskNet.Auctor
{
    using System;
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
            var documents = await dataManager.GetRecordsAsync<Faculty>(AuctorTable.Faculty);

            return Ok(documents);
        }

        [HttpGet]
        [Route("rooms")]
        public async Task<IHttpActionResult> GetRooms()
        {
            var documents = await dataManager.GetRecordsAsync<Room>(AuctorTable.Room);

            return Ok(documents);
        }

        [HttpGet]
        [Route("courses")]
        public async Task<IHttpActionResult> GetCourses()
        {
            var documents = await dataManager.GetRecordsAsync<Course>(AuctorTable.Course);

            return Ok(documents);
        }

        [HttpGet]
        [Route("lecturers")]
        public async Task<IHttpActionResult> GetLecturers()
        {
            var documents = await dataManager.GetRecordsAsync<Lecturer>(AuctorTable.Lecturer);

            return Ok(documents);
        }

        [HttpPost]
        [Route("consultations")]
        public async Task<IHttpActionResult> GetConsultations()
        {
            var lecturerId = "3e4fdadc-cad6-4475-9d0a-2d752a796ca8";

            if (string.IsNullOrEmpty(lecturerId))
            {
                return BadRequest();
            }

            var documents = await dataManager.GetConsultations<Consultation>(Guid.Parse(lecturerId));

            return Ok(documents);
        }
    }
}