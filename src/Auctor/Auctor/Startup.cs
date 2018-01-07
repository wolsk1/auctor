[assembly: Microsoft.Owin.OwinStartup(typeof(VolskNet.Auctor.Api.Startup))]
namespace VolskNet.Auctor.Api
{   
    using Autofac;
    using Microsoft.Owin;
    using Microsoft.Owin.Cors;
    using Microsoft.Owin.Extensions;
    using Microsoft.Owin.FileSystems;
    using Microsoft.Owin.StaticFiles;
    using Owin;
    using System;
    using System.IO;
    using System.Net;
    using System.Text.RegularExpressions;
    using System.Threading.Tasks;
    using System.Web.Cors;
    using System.Web.Http;

    public class Startup
    {
        private static readonly Regex file = new Regex(
           @"(?i)\.[a-z0-9]+(\?\S+)?$",
           RegexOptions.Compiled | RegexOptions.IgnoreCase | RegexOptions.Singleline);

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Performance", "CA1822:MarkMembersAsStatic", Justification = "Startup class")]
        public void Configuration(IAppBuilder app)
        {
            var wwwroot = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "wwwroot");
            AutofacInitializer.Initialize();
            var configurator = Configure(AutofacInitializer.AutofacContainer);
            configurator(app);            
        }

        public static Action<IAppBuilder> Configure(IContainer container)
        {
            return app =>
            {
                if (AppSettings.ShowErrorPage)
                {
                    app.UseErrorPage();
                }

                app.UseAutofacMiddleware(container);
                var config = HttpConfig.SetHttpConfiguration(container);
                config.MapHttpAttributeRoutes();
                ConfigureCors(app);
                ConfigureApiService(app, config);                

                app.UseStageMarker(PipelineStage.MapHandler);
            };
        }

        private static void ConfigureCors(IAppBuilder app)
        {
            if (AppSettings.CorsEnabled)
            {
                app.UseCors(GetCorsOptions());
            }
        }

        private static void ConfigureApiService(IAppBuilder app, HttpConfiguration httpConfiguration)
        {
            app.Map($"/{AppSettings.ApiPrefix}", pipeline =>
            {
                pipeline.UseWebApi(httpConfiguration);
            });
        }

        private static CorsOptions GetCorsOptions()
        {
            var headers = AppSettings.CorsAllowedHeaders;
            var methods = AppSettings.CorsAllowedMethods;
            var origins = AppSettings.CorsAllowedOrigins;

            var corsPolicy = new CorsPolicy
            {
                AllowAnyHeader = headers.Length == 0,
                AllowAnyMethod = methods.Length == 0,
                AllowAnyOrigin = origins.Length == 0,
                SupportsCredentials = AppSettings.CorsSupportsCredentials
            };

            if (!corsPolicy.AllowAnyHeader)
            {
                foreach (var header in headers)
                {
                    corsPolicy.Headers.Add(header);
                }
            }

            if (!corsPolicy.AllowAnyMethod)
            {
                foreach (var method in methods)
                {
                    corsPolicy.Methods.Add(method);
                }
            }

            if (corsPolicy.AllowAnyOrigin)
            {
                return new CorsOptions
                {
                    PolicyProvider = new CorsPolicyProvider
                    {
                        PolicyResolver = request => Task.FromResult(corsPolicy)
                    }
                };
            }

            foreach (var origin in origins)
            {
                corsPolicy.Origins.Add(origin);
            }

            return new CorsOptions
            {
                PolicyProvider = new CorsPolicyProvider
                {
                    PolicyResolver = request => Task.FromResult(corsPolicy)
                }
            };
        }
    }
}