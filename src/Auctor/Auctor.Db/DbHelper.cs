namespace VolskNet.Auctor.Db
{
    using Npgsql;

    public static class DbHelper
    {
        public static NpgsqlConnection GetDBConnection()
        {
            var connection = new NpgsqlConnection(ConnectionStrings.AuctorConnection);
            connection.Open();

            return connection;
        }

        public static NpgsqlCommand CreateCommand()
        {
            return new NpgsqlCommand
            {
                Connection = GetDBConnection()
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