namespace VolskNet.Auctor
{    
    using Autofac;
    using Autofac.Integration.WebApi;
    using System.Reflection;

    public class AutofacConfig : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);

            //RegisterProviders(builder);
            RegisterControllers(builder);
        }

        private static void RegisterControllers(ContainerBuilder builder)
        {
            //builder.RegisterType<ClassifiersController>()
            //    .AsSelf();

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());
        }

        //private static void RegisterProviders(ContainerBuilder builder)
        //{
        //    builder.RegisterType<DocumentProvider>()
        //       .As<IDocumentProvider>();
        //}
    }
}