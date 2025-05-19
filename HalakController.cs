using HalakAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HalakAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HalakController : ControllerBase
    {

        [HttpDelete]
        public IActionResult DeleteHalak(int id)
        {
            using (var context = new HalakContext())
            {
                try
                {

                    if (!context.Halaks.Select(t => t.Id).Contains(id))
                    {

                        return NotFound("Nincs ilyen ID-val termék");
                    }
                    else
                    {
                        Halak halak = new Halak() { Id = id };
                        context.Halaks.Remove(halak);
                        //context.SaveChanges();

                        return Ok("Sikeres törlés");
                    }
                }

                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }

        [HttpPut]
        public IActionResult PutHalak(Halak halak)
        {
            using (var context = new HalakContext())
            {
                try
                {

                    if (!context.Halaks.Select(t => t.Id).Contains(halak.Id))
                    {

                        return NotFound("Nincs ilyen ID-val termék");
                    }
                    else
                    {

                        context.Halaks.Update(halak);
                        //context.SaveChanges();

                        return Ok("Sikeres módosítás");
                    }
                }

                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }

        [HttpPost]
        public IActionResult PostHalak(Halak halak)
        {
            using (var context = new HalakContext())
            {
                try
                {

                        context.Halaks.Add(halak);
                        //context.SaveChanges();

                        return Ok("Sikeres módosítás");
                    
                }

                catch (Exception ex)
                {
                    return BadRequest(ex);
                }
            }
        }

    }
}
