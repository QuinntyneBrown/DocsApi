using System.Web.Http;
using Owin;

namespace DocsApi
{
    public class ApiConfiguration: Common.Web.ApiConfiguration
    {
        public new static void Install(HttpConfiguration config, IAppBuilder app)
        {
            Common.Web.ApiConfiguration.Install(config,app);
        }
    }
}
