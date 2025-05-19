using HalakAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HalakAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HalakController : ControllerBase
    {
        [HttpGet("ByHorgasz")]
        public IActionResult GetByHorgasz(int id)
        {
            using (var context = new HalakContext())
            {
                try
                {

                    if (context.Horgaszoks.Select(h => h.Id).Contains(id))
                    {
                        var result = context.Fogasoks.Include(f => f.Horgasz).Include(f => f.Hal).Where(f => f.HorgaszId == id).Select(f => f.Hal).ToList();
                        return Ok(result);
                    }
                    else
                    {
                        return NotFound("Nem létező horgász");
                    }
                }
                catch (Exception ex)
                {

                    return BadRequest(ex.Message);
                }
            }
        }
    }
}
