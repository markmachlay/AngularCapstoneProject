using System;
using System.Collections.Generic;

#nullable disable

namespace AngularCapstoneProject.Models
{
    public partial class Favorite
    {
        public int FavoriteId { get; set; }
        public int UserId { get; set; }
        public int EventId { get; set; }

        public virtual Event Event { get; set; }
    }
}
