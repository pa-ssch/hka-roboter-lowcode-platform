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
        public IActionResult PutWorkflow(WorkflowElement[] workflowData)
        {
            WorkflowManager.Get().PutWorkflow(workflowData);
            return NoContent();
        }

        [HttpPost(Name = "ExecuteWorkflow")]
        public int ExecuteWorkflow() => WorkflowManager.Get().Execute();
    }
}
