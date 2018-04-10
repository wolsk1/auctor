namespace VolskNet.Auctor.Db
{
    using Npgsql;

    public static class DbHelper
    {
        public static NpgsqlConnection GetDBConnection(bool useAuctor = true)
        {
            var constr = useAuctor
                ? ConnectionStrings.AuctorConnection
                : ConnectionStrings.PostConnection;
            var connection = new NpgsqlConnection(constr);
            connection.Open();

            return connection;
        }

        public static NpgsqlCommand CreateCommand(bool useAuctor = true)
        {
            return new NpgsqlCommand
            {
                Connection = GetDBConnection(useAuctor)
            };
        }

        public static NpgsqlCommandBuilder GetBuilder(string tableName)
        {
            var command = CreateCommand();
            command.CommandText = $"SELECT * FROM {tableName}";

            var builder = new NpgsqlCommandBuilder(new NpgsqlDataAdapter(command));

            return builder;
        }
    }
}