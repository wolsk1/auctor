namespace VolskNet.Auctor
{
    using System.Web.Http;

    [RoutePrefix("test")]
    
    internal class ClassifiersController : BaseApiController
    {       
        public ClassifiersController()
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