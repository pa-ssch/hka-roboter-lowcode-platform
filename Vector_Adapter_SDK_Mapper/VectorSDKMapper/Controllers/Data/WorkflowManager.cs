using Anki.Vector;
using Anki.Vector.Types;

namespace VectorSDKMapper.Controllers.Data
{
    public class WorkflowManager
    {
        private WorkflowElement[] _workflowData = Array.Empty<WorkflowElement>();
        private WorkflowElement[] _flatWorkflowData = Array.Empty<WorkflowElement>();
        internal async Task PutWorkflow(WorkflowElement[] workflowData) => await Task.Run(() =>
        {
            _workflowData = workflowData;
            _flatWorkflowData = _workflowData.Flatten();
        });

        internal async Task<ImagePreview[]> GetPreviewData()
        {
            return await Task.Run(() =>
            {
                var imagePreviewData = new ImagePreview[_flatWorkflowData.Length];

                for (int i = 0; i < _flatWorkflowData.Length; i++)
                {
                    var currentWorkflowElement = _flatWorkflowData[i];

                    imagePreviewData[i] = new ImagePreview(
                        currentWorkflowElement.Identifier,
                        currentWorkflowElement.Arguments.FirstOrDefault(),
                        i > 0 ? imagePreviewData[i - 1] : null);
                }

                return imagePreviewData;
            });
        }

        internal async Task<int> Execute()
        {
            _ = ExecuteWorkflow();
            return await Task.Run(() => _currentExecutionStep);
        }


        private int _currentExecutionStep;
        private async Task ExecuteWorkflow()
        {
            if (_currentExecutionStep != 0)
                return;

            using var robot = await Robot.NewConnection();
            await robot.Control.RequestControl();
            await robot.Behavior.SetHeadAngle(-5.Degrees());
            await robot.Behavior.SetLiftHeight(0);

            foreach (var step in _flatWorkflowData)
            {
                switch (step.Identifier)
                {
                    case "drive":
                        await robot.Behavior.DriveStraight((int)(step.Arguments[0].GetDouble() * 100), 1000);
                        break;
                    case "go-to-charger":
                        await robot.Behavior.DriveOnCharger();
                        break;
                    case "go-to-Cube":
                        while (robot.World.LightCube?.Pose is null)
                            await robot.World.ConnectCube();
                        await robot.Behavior.GoToCube(10, 5);
                        await robot.Behavior.DockWithCube(robot.World.LightCube, numRetries: 5);
                        break;
                    case "leave-charger":
                        if (robot.Status.IsOnCharger)
                            await robot.Behavior.DriveOffCharger();
                        break;
                    case "lift-arms":
                        step.Arguments[0].TryGetProperty("speedLevel", out var liftSpeed);
                        await robot.Motors.SetLiftMotor(10 * liftSpeed.GetInt32());
                        break;
                    case "lower-arms":
                        step.Arguments[0].TryGetProperty("speedLevel", out var lowerSpeed);
                        await robot.Motors.SetLiftMotor(-10 * lowerSpeed.GetInt32());
                        break;
                    case "on-startup":
                        break;
                    case "rotate":
                        await robot.Behavior.TurnInPlace(((float)step.Arguments[0].GetDouble()).Degrees());
                        break;
                    case "wait":
                        await Task.Delay((int)(step.Arguments[0].GetDouble() * 1000));
                        break;
                }

                _currentExecutionStep++;
            }

            _currentExecutionStep = 0;
        }

    }
}
