namespace VolskNet.Auctor
{
    using System;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Web.Http;

    internal class ErrorActionResult : IHttpActionResult
    {
        private readonly HttpRequestMessage request;

        public ErrorActionResult(HttpStatusCode httpStatusCode, HttpRequestMessage request, ApiResult result = null)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            this.request = request;
            HttpStatusCode = httpStatusCode;
            Result = result;
        }

        public HttpStatusCode HttpStatusCode { get; }

        public ApiResult Result { get; }

        public Task<HttpResponseMessage> ExecuteAsync(CancellationToken cancellationToken)
        {
            return Task.FromResult(Execute());
        }

        private HttpResponseMessage Execute()
        {
            var response = Result != null
                ? request.CreateResponse(HttpStatusCode, Result)
                : request.CreateResponse(HttpStatusCode, string.Empty);
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("application/json");

            return response;
            
        }
    }
}