namespace VolskNet.Auctor.Db
{
    internal class ConnectionStrings
    {
        internal static string AuctorConnection = Utils.GetConnectionString("auctor-db");
        internal static string PostConnection = Utils.GetConnectionString("postgres-db");
    }
}