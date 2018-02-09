namespace VolskNet.Auctor
{
    using System.Collections.Generic;

    internal class ApiErrorModel
    {
        public IEnumerable<string> FieldNames { get; set; }

        public string ErrorMessage { get; set; }
    }
}