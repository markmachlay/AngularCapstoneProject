using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace AngularCapstoneProject.Models
{
    public partial class AngularContext : DbContext
    {
        private readonly string _connectionString;
        public AngularContext(DbSet<Event> events, DbSet<Favorite> favorites, DbSet<Performer> performers)
        {
            Events = events;
            Favorites = favorites;
            Performers = performers;
        }
        public AngularContext()
        {
        }
        public AngularContext(DbContextOptions<AngularContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Event> Events { get; set; }
        public virtual DbSet<Favorite> Favorites { get; set; }
        public virtual DbSet<Performer> Performers { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=(LocalDb)\\LocalDb;Database=Angular;Trusted_Connection=true;MultipleActiveResultSets=true");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Event>(entity =>
            {
                entity.Property(e => e.EventId).ValueGeneratedNever();

                entity.Property(e => e.Admission).HasColumnType("money");

                entity.Property(e => e.EventDate).HasColumnType("date");

                entity.Property(e => e.EventName)
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Favorite>(entity =>
            {
                entity.Property(e => e.UserId)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.HasOne(d => d.Event)
                    .WithMany(p => p.Favorites)
                    .HasForeignKey(d => d.EventId)
                    .HasConstraintName("FK__Favorites__Event__36B12243");
            });

            modelBuilder.Entity<Performer>(entity =>
            {
                entity.Property(e => e.Birthday).HasColumnType("date");

                entity.Property(e => e.DeathMode)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Deathday).HasColumnType("date");

                entity.Property(e => e.Instrument)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.PerformerName)
                    .HasMaxLength(60)
                    .IsUnicode(false);

                entity.Property(e => e.WikiLink)
                    .HasMaxLength(60)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
