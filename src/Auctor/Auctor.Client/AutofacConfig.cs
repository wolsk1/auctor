namespace VolskNet.Auctor.Admin
{
    using Autofac;

    internal class AutofacConfig : Autofac.Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            base.Load(builder);            
        }
    }
}