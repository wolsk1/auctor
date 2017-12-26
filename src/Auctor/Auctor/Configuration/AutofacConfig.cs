namespace VolskNet.Auctor
{    
    using Autofac;
    using Autofac.Integration.WebApi;
    using System.Reflection;
    using VolskNet.Auctor.Domain;

    internal class AutofacConfig : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);
            RegisterManagers(builder);
            //RegisterProviders(builder);
            RegisterControllers(builder);
        }

        private static void RegisterManagers (ContainerBuilder builder)
        {
            builder.RegisterType<Faculty>()
               .AsSelf();
            builder.RegisterType<DataManager>()
               .As<IDataManager>();
        }

        private static void RegisterControllers(ContainerBuilder builder)
        {
            builder.RegisterType<TestController>()
                .AsSelf();
            builder.RegisterType<DbController>()
                .AsSelf();
            builder.RegisterType<UserController>()
                .AsSelf();
            builder.RegisterType<ConsultationController>()
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