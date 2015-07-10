using System.Web.Http;
using Microsoft.Owin;
using Owin;

[assembly: OwinStartup(typeof(DocsApi.IISHost.Startup))]

namespace DocsApi.IISHost
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            GlobalConfiguration.Configure(config => ApiConfiguration.Install(config, app));
        }
    }
}
