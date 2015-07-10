using System;
using DocsApi.Models;

namespace DocsApi.Dtos
{
    public class DocDto
    {
        public DocDto(Doc doc)
        {
            
        }
        public string Filename { get; set; }

        public DateTime LastDateModefied { get; set; }
    }
}