using System.Collections.Generic;
using System.Threading.Tasks;
using Common.Dtos;
using DocsApi.Dtos;

namespace DocsApi.Services.Contracts
{
    public interface IDocService
    {
        Task<List<DocDto>> Upload(System.Net.Http.HttpRequestMessage Request);
    }
}
