namespace DocsApi.Migrations
{
    using System.Data.Entity.Migrations;
    
    internal sealed class Configuration : DbMigrationsConfiguration<DocsApi.Data.DocsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(DocsApi.Data.DocsContext context)
        {

        }
    }
}
