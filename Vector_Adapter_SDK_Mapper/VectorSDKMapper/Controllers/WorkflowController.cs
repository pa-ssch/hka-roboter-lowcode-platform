using Microsoft.AspNetCore.Mvc;
using VectorSDKMapper.Controllers.Data;
using System.Linq;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("vector/[controller]")]
    public class WorkflowController : ControllerBase
    {
        [HttpPut(Name = "PutWorkflow")]
        public async Task<IActionResult> PutWorkflow(WorkflowElement[] workflowData)
        {
            WorkflowManager.Get().PutWorkflow(workflowData);
            return NoContent();
        }

        [HttpPost(Name = "ExecuteWorkflow")]
        public async Task<int> ExecuteWorkflow() => await WorkflowManager.Get().Execute();
    }
}
