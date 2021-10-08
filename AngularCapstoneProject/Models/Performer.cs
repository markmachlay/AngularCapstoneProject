using System;
using System.Collections.Generic;

#nullable disable

namespace AngularCapstoneProject.Models
{
    public partial class Performer
    {
        public int PerformerId { get; set; }
        public string PerformerName { get; set; }
        public DateTime? Birthday { get; set; }
        public DateTime? Deathday { get; set; }
        public string Instrument { get; set; }
        public string DeathMode { get; set; }
        public string WikiLink { get; set; }
    }
}
