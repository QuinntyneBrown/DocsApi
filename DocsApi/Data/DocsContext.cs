using System.Data.Entity;
using DocsApi.Models;

namespace DocsApi.Data
{
    public class DocsContext: Common.Data.BaseDbContext
    {
        public DocsContext():base("docs")
        {
            
        }

        public DbSet<Doc> Docs { get; set; }

        public DbSet<Folder> Folders { get; set; }
    }
}