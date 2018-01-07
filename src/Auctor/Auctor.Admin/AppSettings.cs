namespace VolskNet.Auctor.Admin
{    
    internal static class AppSettings
    {
        internal static readonly bool CorsEnabled = Utils.GetAppSettingsValue("cors:enabled", true);
        internal static readonly string[] CorsAllowedOrigins = Utils.GetAppSettingsArrayValue<string>("cors:allowed-origins");
        internal static readonly string[] CorsAllowedHeaders = Utils.GetAppSettingsArrayValue<string>("cors:allowed-headers");
        internal static readonly string[] CorsAllowedMethods = Utils.GetAppSettingsArrayValue<string>("cors:allowed-methods");
        internal static readonly bool CorsSupportsCredentials = Utils.GetAppSettingsValue("cors:supports-credentials", true);
        internal static readonly bool ShowErrorPage = Utils.GetAppSettingsValue<bool>("debug:show-errorPage");
        internal static readonly string ApiPath = Utils.GetAppSettingsValue<string>("app:api-path");
        internal static readonly string AppName = Utils.GetAppSettingsValue<string>("app:name");
        internal static readonly string ErrorPage = Utils.GetAppSettingsValue<string>("app:error-document");
        internal static readonly string DefaultPage = Utils.GetAppSettingsValue<string>("app:default-document");
    }
}