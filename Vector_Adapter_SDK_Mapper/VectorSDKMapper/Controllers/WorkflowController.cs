using Microsoft.AspNetCore.Mvc;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("vector/[controller]")]
    public class WorkflowController : ControllerBase
    {
        private readonly ILogger<VectorController> _logger;

        public WorkflowController(ILogger<VectorController> logger) => _logger = logger;

        [HttpGet(Name = "GetPreviewData")]
        public async Task<ActionResult<object>> GetPreviewData()
        {
            _logger.LogInformation("Get Workflow preview");
            return "preview";
        }

        [HttpPut(Name = "PutWorkflow")]
        public async Task<IActionResult> PutWorkflow(object workflowData)
        {
            _logger.LogInformation("Put new Workflow: ", workflowData);

            return NoContent();
        }

        [HttpPost(Name = "ExecuteWorkflow")]
        public async Task<IActionResult> ExecuteWorkflow()
        {
            _logger.LogInformation("Execute Workflow and return information ");

            return NoContent();
        }
    }
}
