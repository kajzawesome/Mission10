using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Mission10.Models;

public class Bowler
{
    [Key]
    public int BowlerID { get; set; }

    public required string BowlerLastName { get; set; }
    public required string BowlerFirstName { get; set; }
    public string? BowlerMiddleInit { get; set; }
    public required string BowlerAddress { get; set; }
    public required string BowlerCity { get; set; }
    public required string BowlerState { get; set; }
    public required string BowlerZip { get; set; }
    public required string BowlerPhoneNumber { get; set; }

    public int TeamID { get; set; }

    public required Team Team { get; set; }
}