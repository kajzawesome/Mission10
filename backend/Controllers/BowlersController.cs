using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10.Data;

namespace Mission10.Controllers;

[ApiController]
[Route("bowlers")]
public class BowlerController : ControllerBase
{
    private BowlingContext _context;

    public BowlerController(BowlingContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var bowlers = _context.Bowlers
            .Include(b => b.Team)
            .Where(b => b.Team != null &&
                   (b.Team.TeamName == "Marlins" || b.Team.TeamName == "Sharks"))
            .Select(b => new
            {
                bowlerId = b.BowlerID,
                bowlerFirstName = b.BowlerFirstName,
                bowlerMiddleInit = b.BowlerMiddleInit,
                bowlerLastName = b.BowlerLastName,
                bowlerAddress = b.BowlerAddress,
                bowlerCity = b.BowlerCity,
                bowlerState = b.BowlerState,
                bowlerZip = b.BowlerZip,
                bowlerPhoneNumber = b.BowlerPhoneNumber,
                teamName = b.Team.TeamName
            })
            .ToList();

        return Ok(bowlers);
    }
}