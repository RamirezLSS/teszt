using HalakAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HalakAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HorgaszokController : ControllerBase
    {
        [HttpGet("All")]
        public IActionResult All()
        {
            using (var context = new HalakContext())
            {
                try
                {
                    var result = context.Halaks.ToList();
                    return Ok(result);
                }

                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }

            [HttpGet("ById/{id}")]
            public IActionResult AllById(int id)
            {
                using (var context = new HalakContext())
                {
                    try
                    {

                        var result = context.Halaks.Where(x => x.Id == id).Select(result => new
                        {
                            result.Id,
                            result.MeretCm,
                            result.Faj,
                            result.Fogasoks,
                            result.Kep
                        }).ToList();
                        return Ok(result);
                    }

                    catch (Exception ex)
                    {
                        return BadRequest(ex);
                    }
                }
            }
    } 
}
