namespace VolskNet.Auctor.Admin
{
    using Autofac;
    using System.Reflection;

    public static class AutofacInitializer
    {
        private static bool initializedAlready;
        private static readonly object lockTarget = new object();

        /// <summary>
        /// Gets the autofac container.
        /// </summary>
        /// <value>
        /// The autofac container.
        /// </value>
        public static IContainer AutofacContainer { get; private set; }

        /// <summary>
        /// Initializes autofac container.
        /// </summary>
        public static void Initialize()
        {
            if (initializedAlready)
            {
                return;
            }

            lock (lockTarget)
            {
                if (initializedAlready)
                {
                    return;
                }

                var builder = new ContainerBuilder();

                builder.RegisterAssemblyModules(Assembly.GetExecutingAssembly());

                AutofacContainer = builder.Build();

                initializedAlready = true;
            }
        }
    }
}