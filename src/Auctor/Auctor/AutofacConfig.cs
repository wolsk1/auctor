namespace VolskNet.Auctor.Api
{
    using Db;
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
            RegisterControllers(builder);
        }

        private static void RegisterManagers (ContainerBuilder builder)
        {
            builder.RegisterType<DataManager>()
               .As<IDataManager>();
            builder.RegisterType<ConsultationsRepository>()
               .As<IRepository<Consultation>>();
            builder.RegisterType<EventRepository>()
               .As<IRepository<ConsultationEvent>>();
        }

        private static void RegisterControllers(ContainerBuilder builder)
        {            
            builder.RegisterType<DbController>()
                .AsSelf();            
            builder.RegisterType<ConsultationController>()
                .AsSelf();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }
    }
}