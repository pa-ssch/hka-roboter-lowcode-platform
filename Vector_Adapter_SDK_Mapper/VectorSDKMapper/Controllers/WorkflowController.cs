using Microsoft.AspNetCore.Mvc;
using VectorSDKMapper.Controllers.Data;
using System.Linq;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("vector/[controller]")]
    public class WorkflowController : ControllerBase
    {
        private readonly WorkflowManager _manager = new();

        [HttpGet(Name = "GetPreviewData")]
        public async Task<ImagePreview[]> GetPreviewData() => await _manager.GetPreviewData();

        [HttpPut(Name = "PutWorkflow")]
        public async Task<IActionResult> PutWorkflow(WorkflowElement[] workflowData)
        {
            await _manager.PutWorkflow(workflowData);
            return NoContent();
        }

        [HttpPost(Name = "ExecuteWorkflow")]
        public async Task<int> ExecuteWorkflow() => await _manager.Execute();
    }
}
