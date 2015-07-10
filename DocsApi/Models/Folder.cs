using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace DocsApi.Models
{
    public class Folder
    {
        public Folder()
        {
            this.ChildFolders = new HashSet<Folder>();

            this.Docs = new HashSet<Doc>();
        }

        public int Id { get; set; }

        public string Name { get; set; }

        [ForeignKey("ApplicationReference")]
        public int ApplicationReferenceId { get; set; }

        [ForeignKey("ParentFolder")]
        public int? ParentFolderId { get; set; }

        public ICollection<Folder> ChildFolders { get; set; }

        public ICollection<Doc> Docs { get; set; }

        public ApplicationReference ApplicationReference { get; set; }

        public Folder ParentFolder { get; set; }
    }
}