namespace VolskNet.Auctor
{
    using System;
    using System.Net.Http.Headers;
    using System.Web.Http.Filters;

    internal sealed class NoCacheHeaderFilter : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            if (actionExecutedContext == null)
            {
                throw new ArgumentNullException(nameof(actionExecutedContext));
            }

            var response = actionExecutedContext.Response;

            if (response == null)
            {
                return;
            }

            response.Headers.CacheControl = new CacheControlHeaderValue
            {
                NoCache = true,
                NoStore = true,
                MustRevalidate = true
            };
            response.Headers.Pragma.Add(new NameValueHeaderValue("no-cache"));
            if (response.Content != null)
            {
                response.Content.Headers.Expires = DateTimeOffset.UtcNow;
            }
        }
    }
}