namespace VolskNet.Auctor
{
    using System.Web.Http;

    [RoutePrefix("test")]
    
    public class TestController : BaseApiController
    {       
        public TestController()
        {            
        }
        
        [Route("")]
        [HttpGet]
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1822:MarkMembersAsStatic", Justification = "Startup class")]
        public string Test()
        {
            return "Online";
        }
    }
}