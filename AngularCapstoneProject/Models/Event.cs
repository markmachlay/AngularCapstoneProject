using System;
using System.Collections.Generic;

#nullable disable

namespace AngularCapstoneProject.Models
{
    public partial class Event
    {
        public Event()
        {
            Favorites = new HashSet<Favorite>();
        }

        public int EventId { get; set; }
        public string EventName { get; set; }
        public DateTime? EventDate { get; set; }
        public decimal? Admission { get; set; }
        public string Details { get; set; }

        public virtual ICollection<Favorite> Favorites { get; set; }
    }
}
