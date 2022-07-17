namespace VectorSDKMapper.Controllers.Data
{
    public class WorkflowElement
    {
        public string Identifier { get; set; } = "";
        public System.Text.Json.JsonElement[] Arguments { get; set; } = Array.Empty<System.Text.Json.JsonElement>();
        public WorkflowElement[] FollowingElements { get; set; } = Array.Empty<WorkflowElement>();

        public static WorkflowElement[] operator +(WorkflowElement head, WorkflowElement[] tail) => tail.Prepend(head).ToArray();
    }


    public static class WorkflowElementExtensions
    {
        public static WorkflowElement[] Flatten(this WorkflowElement[] elementList) => elementList.Length == 0
            ? Array.Empty<WorkflowElement>()
            : elementList.SelectMany(element => element + element.FollowingElements.Flatten()).ToArray();
    }
}
