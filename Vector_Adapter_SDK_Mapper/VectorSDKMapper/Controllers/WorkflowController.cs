﻿using Microsoft.AspNetCore.Mvc;
using VectorSDKMapper.Controllers.Data;
using System.Linq;

namespace VectorSDKMapper.Controllers
{
    [ApiController]
    [Route("vector/[controller]")]
    public class WorkflowController : ControllerBase
    {
        [HttpGet(Name = "GetPreviewData")]
        public async Task<ImagePreview[]> GetPreviewData() => await WorkflowManager.Get().GetPreviewData();

        [HttpPut(Name = "PutWorkflow")]
        public async Task<IActionResult> PutWorkflow(WorkflowElement[] workflowData)
        {
            await WorkflowManager.Get().PutWorkflow(workflowData);
            return NoContent();
        }

        [HttpPost(Name = "ExecuteWorkflow")]
        public async Task<int> ExecuteWorkflow() => await WorkflowManager.Get().Execute();
    }
}
