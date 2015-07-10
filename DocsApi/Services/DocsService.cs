using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Common.Data.Contracts;
using Common.Services;
using Common.Stream;
using DocsApi.Dtos;
using DocsApi.Models;
using DocsApi.Services.Contracts;
using Common.Dtos;
using DocsApi.Data;

namespace DocsApi.Services
{
    public class DocsService: IDocService
    {
        public DocsService(DocsUow uow)
        {
            this.uow = uow;
            this.repository = this.uow.Docs;
        }

        public async Task<List<DocDto>> Upload(System.Net.Http.HttpRequestMessage Request)
        {
            var docs = new List<DocDto>();

            if (!Request.Content.IsMimeMultipartContent("form-data"))
            {
                throw new HttpResponseException(HttpStatusCode.BadRequest);
            }

            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());

            NameValueCollection formData = provider.FormData;
            IList<HttpContent> files = provider.Files;

            foreach (var file in files)
            {
                var filename = new FileInfo(file.Headers.ContentDisposition.FileName.Trim(new char[] { '"' })
                    .Replace("&", "and")).Name;

                Stream stream = await file.ReadAsStreamAsync();

                var bytes = StreamHelper.ReadToEnd(stream);


                var doc = new Doc();

                if (repository.GetAll().Count(x => x.Filename == filename) < 1)
                {
                    repository.Add(doc);
                }
                else
                {
                    doc = repository.GetAll().Single(x => x.Filename == filename);
                }

                doc.Filename = filename;
                doc.Bytes = bytes;
                doc.ContentType = Convert.ToString(file.Headers.ContentType);

                docs.Add(new DocDto(doc));
            }

            this.uow.SaveChanges();

            return docs;

        }

        protected readonly DocsUow uow;

        protected readonly IRepository<Doc> repository;
    }
}