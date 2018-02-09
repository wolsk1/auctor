namespace VolskNet.Auctor
{
    using System.Collections.Generic;

    internal class ApiResult
    {
        public ApiResult()
        {
            Errors = new List<ApiErrorModel>();
        }

        public IList<ApiErrorModel> Errors { get; }
    }
}