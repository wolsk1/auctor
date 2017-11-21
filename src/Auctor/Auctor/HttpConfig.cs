namespace VolskNet.Auctor
{
    using Autofac;
    using Autofac.Integration.WebApi;
    using Newtonsoft.Json.Serialization;
    using System.Linq;
    using System.Net.Http.Headers;
    using System.Web.Http;

    public static class HttpConfig
    {
        public static HttpConfiguration SetHttpConfiguration(ILifetimeScope container)
        {
            var config = new HttpConfiguration
            {
                DependencyResolver = new AutofacWebApiDependencyResolver(container),
                Filters =
                {
                    new NoCacheHeaderFilter()
                }
            };

            config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            config.Formatters.JsonFormatter.UseDataContractJsonSerializer = false;

            var appXmlType = config.Formatters.XmlFormatter.SupportedMediaTypes.FirstOrDefault(t => t.MediaType == "application/xml");
            config.Formatters.XmlFormatter.SupportedMediaTypes.Remove(appXmlType);
            config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));

            return config;
        }
    }
}