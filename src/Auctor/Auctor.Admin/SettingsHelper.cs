namespace VolskNet.Auctor.Admin
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
                ApiPath = AppSettings.ApiPath,
                AppName = AppSettings.AppName,
                ConnectionProtocol = request.Scheme                
            }, serializerSettings);
        }
    }
}