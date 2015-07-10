using System.Web.Http;
using Common.Controllers;
using DocsApi.Data;
using DocsApi.Models;
using DocsApi.Data;
using DocsApi.Models;
using DocsApi.Services;

namespace DocsApi.Api
{
    public class DocsController : EFController<Doc>
    {
        public DocsController(DocsUow uow, DocsService docsService)
        {
            this.uow = uow;
            this.repository = uow.Docs;
            this.docsService = docsService;
        }

        [HttpPost]
        [Route("upload")]
        public IHttpActionResult Upload()
        {
            return Ok(this.docsService.Upload(Request).Result);
        }

        protected readonly DocsService docsService;
    }
}
