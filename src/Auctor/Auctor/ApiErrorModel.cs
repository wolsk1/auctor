namespace VolskNet.Auctor
{
    using System.Collections.Generic;

    public class ApiErrorModel
    {
        public IEnumerable<string> FieldNames { get; set; }

        public string ErrorMessage { get; set; }
    }
}