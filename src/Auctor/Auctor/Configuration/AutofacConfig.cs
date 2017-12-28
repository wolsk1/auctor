namespace VolskNet.Auctor
{
    using Domain;
    using Autofac;
    using Autofac.Integration.WebApi;
    using System.Reflection;

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
            builder.RegisterType<DataManager>()
               .As<IDataManager>();
            builder.RegisterType<ConsultationsManager>()
               .As<IRepository<Consultation>>();
            builder.RegisterType<EventRepository>()
               .As<IRepository<ConsultationEvent>>();
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