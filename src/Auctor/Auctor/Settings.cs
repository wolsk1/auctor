namespace VolskNet.Auctor
{
    public static class Settings
    {
        internal static readonly bool CorsEnabled = Utils.GetAppSettingsValue("cors:enabled", true);

        internal static readonly string[] CorsAllowedOrigins = Utils.GetAppSettingsArrayValue<string>("cors:allowed-origins");

        internal static readonly string[] CorsAllowedHeaders = Utils.GetAppSettingsArrayValue<string>("cors:allowed-headers");

        internal static readonly string[] CorsAllowedMethods = Utils.GetAppSettingsArrayValue<string>("cors:allowed-methods");

        internal static readonly bool CorsSupportsCredentials = Utils.GetAppSettingsValue("cors:supports-credentials", true);

        internal static readonly bool ShowErrorPage = Utils.GetAppSettingsValue<bool>("debug:show-errorPage");

        internal static readonly bool ApiPrefix = Utils.GetAppSettingsValue<bool>("api:url-prefix");

        internal static readonly bool BaseHref = Utils.GetAppSettingsValue<bool>("api:url-base");
    }
}