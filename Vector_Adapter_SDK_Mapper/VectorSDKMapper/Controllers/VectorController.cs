using Microsoft.AspNetCore.Mvc;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VectorController : ControllerBase
    {
        [HttpGet(Name = "GetState")]
        public async Task<ActionResult<string>> GetState()
        {
            try
            {
                return Content((await Anki.Vector.Robot.NewConnection()) == null ? "not-connected" : "connected");
            }
            catch (Anki.Vector.Exceptions.VectorNotFoundException)
            {
                return Content("not-connected");
            }
        }
    }
}