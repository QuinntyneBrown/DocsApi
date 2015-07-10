using Common.Data;
using Common.Data.Contracts;
using DocsApi.Models;

namespace DocsApi.Data
{
    public class DocsUow: BaseUow
    {
        public DocsUow(DocsContext docsContext)
            : base(docsContext)
        {
            
        }

        public IRepository<Doc> Docs { get; set; }
    }
}