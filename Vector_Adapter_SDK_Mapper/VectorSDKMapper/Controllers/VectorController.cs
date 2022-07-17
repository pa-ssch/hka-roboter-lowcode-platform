using Microsoft.AspNetCore.Mvc;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VectorController : ControllerBase
    {
        [HttpGet(Name = "GetState")]
        public async Task<ActionResult<string>> GetState() => await Task.Run(() => Content("connected"));
    }
}