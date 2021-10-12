using System;
using System.Collections.Generic;


namespace AngularCapstoneProject.Models
{
    public partial class Users
    {
        public Users()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
