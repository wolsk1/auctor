namespace VolskNet.Auctor
{
    using System.Collections.Generic;

    public class ApiResult
    {
        public ApiResult()
        {
            Errors = new List<ApiErrorModel>();
        }

        public IList<ApiErrorModel> Errors { get; }
    }
}