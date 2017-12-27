namespace VolskNet.Auctor
{
    using Npgsql;

    public static class NpgsqlExtensions
    {
        public static void AddParam(this NpgsqlCommand cmd, string paramName, object paramValue)
        {
            var parameter = cmd.CreateParameter();
            parameter.ParameterName = paramName;
            parameter.Value = paramValue;

            cmd.Parameters.Add(parameter);
        }
    }
}