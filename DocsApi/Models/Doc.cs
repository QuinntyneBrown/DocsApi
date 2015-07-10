using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DocsApi.Models
{
    public class Doc
    {
        public Doc()
        {
            
        }

        public int Id { get; set; }

        [ForeignKey("Folder")]
        public int? FolderId { get; set; }

        [ForeignKey("ApplicationReference")]
        public int ApplicationReferenceId { get; set; }

        public string Filename { get; set; }

        public Byte[] Bytes { get; set; }

        public string ContentType { get; set; }

        public ApplicationReference ApplicationReference { get; set; }

        public Folder Folder { get; set; }
    }
}