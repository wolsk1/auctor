﻿namespace VolskNet.Auctor
{    
    using Autofac;
    using Autofac.Integration.WebApi;
    using System.Reflection;

    internal class AutofacConfig : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            //RegisterProviders(builder);
            RegisterControllers(builder);
        }

        private static void RegisterControllers(ContainerBuilder builder)
        {
            builder.RegisterType<TestController>()
                .AsSelf();
            builder.RegisterType<UserController>()
                .AsSelf();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }

        //private static void RegisterProviders(ContainerBuilder builder)
        //{
        //    builder.RegisterType<DocumentProvider>()
        //       .As<IDocumentProvider>();
        //}
    }
}