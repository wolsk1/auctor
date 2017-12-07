namespace VolskNet.Auctor
{
    using FluentValidation.Results;
    using System;
    using System.Collections.Generic;
    using System.Net;
    using System.Web.Http;


    internal abstract class BaseController : ApiController
    {
        protected IHttpActionResult ApiResponse(IEnumerable<ValidationFailure> errors)
        {
            return Error(ToApiOperationResult(errors));
        }

        public static ApiResult ToApiOperationResult(IEnumerable<ValidationFailure> errors)
        {
            if (errors == null)
            {
                throw new ArgumentNullException(nameof(errors));
            }
            var result = new ApiResult();

            foreach (var error in errors)
            {
                result.Errors.Add(new ApiErrorModel
                {
                    ErrorMessage = error.ErrorMessage,
                    FieldNames = new[] { char.ToLower(error.PropertyName[0]) + error.PropertyName.Substring(1) }
                });
            }

            return result;
        }

        protected IHttpActionResult Error(ApiResult result)
        {
            return new ErrorActionResult(HttpStatusCode.BadRequest, Request, result);
        }
    }
}