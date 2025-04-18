﻿using Anki.Vector;
using Anki.Vector.Types;

namespace VectorSDKMapper.Controllers.Data
{
    public class WorkflowManager
    {
        private WorkflowElement[] _workflowData = Array.Empty<WorkflowElement>();
        private WorkflowElement[] _flatWorkflowData = Array.Empty<WorkflowElement>();
        internal void PutWorkflow(WorkflowElement[] workflowData)
        {
            Interlocked.Exchange(ref _currentExecutionStep, 0);
            _workflowData = workflowData;
            _flatWorkflowData = _workflowData.Flatten();
        }

        private static WorkflowManager? _instance;
        public static WorkflowManager Get()
        {
            if (_instance == null)
                _instance = new();

            return _instance;
        }


        internal int Execute()
        {
            lock (_workflowData)
            {
                if (_currentExecutionStep == 0)
                {
                    Interlocked.Exchange(ref _currentExecutionStep, 1);
                    _ = ExecuteWorkflow();
                }
            }

            return _currentExecutionStep;
        }


        private int _currentExecutionStep = 0;
        private async Task ExecuteWorkflow()
        {
            bool lockWasSuccessful = false;
            try
            {
                Monitor.TryEnter(_flatWorkflowData, ref lockWasSuccessful);

                if (!lockWasSuccessful)
                    return;

                var robot = await Anki.Vector.Robot.NewConnection();
                await robot.Control.RequestControl();
                await robot.Behavior.SetHeadAngle(-5.Degrees());
                await robot.Behavior.SetLiftHeight(0);

                foreach (var step in _flatWorkflowData)
                {
                    if (_currentExecutionStep <= 0)
                        return;

                    switch (step.Identifier)
                    {
                        case "drive":
                            if (float.TryParse(step.Arguments[0].GetString(), out var distanceInCm))
                                await robot.Behavior.DriveStraight(distanceInCm * 10, 1000, numRetries: 10);
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
                            await robot.Motors.SetLiftMotor(1 * liftSpeed.GetInt32());
                            await Task.Delay(1000 / liftSpeed.GetInt32());
                            break;
                        case "lower-arms":
                            step.Arguments[0].TryGetProperty("speedLevel", out var lowerSpeed);
                            await robot.Motors.SetLiftMotor(-1 * lowerSpeed.GetInt32());
                            await Task.Delay(1000 / lowerSpeed.GetInt32());
                            break;
                        case "on-startup":
                            break;
                        case "rotate":
                            if (float.TryParse(step.Arguments[0].GetString(), out var rotationInDegrees))
                                await robot.Behavior.TurnInPlace(rotationInDegrees.Degrees());
                            break;
                        case "wait":
                            if (float.TryParse(step.Arguments[0].GetString(), out var delay))
                                await Task.Delay((int)(delay * 1000));
                            break;
                    }

                    if (_currentExecutionStep <= 0)
                        return;

                    Interlocked.Increment(ref _currentExecutionStep);
                }
            }
            finally
            {
                Interlocked.Exchange(ref _currentExecutionStep, -1);

                if(lockWasSuccessful)
                    Monitor.Exit(_flatWorkflowData);
            }
        }
    }
}
