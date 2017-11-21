namespace VolskNet.Auctor
{
    using Microsoft.Owin;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;
    using System;

    internal class SettingsHelper
    {
        private static readonly JsonSerializerSettings serializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        public static string LoadAppSettings(IOwinRequest request)
        {
            if (request == null)
            {
                throw new ArgumentNullException(nameof(request));
            }

            var version = typeof(Startup).Assembly.GetName()
                .Version.ToString();

            return JsonConvert.SerializeObject(new
            {
                Version = version,
                BasePath = Settings.BaseHref,
                ApiPath = $"{request.Scheme}://{request.Host.Value}/{Settings.ApiPrefix}",
                ConnectionProtocol = request.Scheme
            }, serializerSettings);
        }
    }
}