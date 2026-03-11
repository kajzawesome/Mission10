using System.ComponentModel.DataAnnotations;

namespace Mission10.Models;

public class Team
{
    [Key]
    public int TeamID { get; set; }

    public required string TeamName { get; set; }

    public required List<Bowler> Bowlers { get; set; }
}