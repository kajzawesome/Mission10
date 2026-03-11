using Microsoft.EntityFrameworkCore;
using Mission10.Models;

namespace Mission10.Data;

public class BowlingContext : DbContext
{
    public BowlingContext(DbContextOptions<BowlingContext> options) : base(options)
    {
    }

    public DbSet<Bowler> Bowlers { get; set; }
    public DbSet<Team> Teams { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Bowler>()
            .HasOne(b => b.Team)
            .WithMany(t => t.Bowlers)
            .HasForeignKey(b => b.TeamID);
    }
}