namespace VolskNet.Auctor.Api
{
    using Microsoft.Owin;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;
    using System;

    internal static class SettingsHelper
    {
        private static readonly JsonSerializerSettings serializerSettings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };        

        internal static string LoadAppSettings(string basePath, IOwinRequest request)
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
                BasePath = basePath,
                ApiPath = $"{request.Scheme}://{request.Host.Value}/{basePath}{AppSettings.ApiPrefix}",
                ConnectionProtocol = request.Scheme,
                AppName = AppSettings.AppName
            }, serializerSettings);
        }
    }
}