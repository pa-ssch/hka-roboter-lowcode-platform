import { IRobotFunctionality } from './roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

export class WorkflowManager {
  private static readonly workflows: IRobotFunctionality[][] = [];

  public static push(workflow: IRobotFunctionality[]): void {
    let workflowCopy: IRobotFunctionality[] = [];
    workflow.forEach((fnc) => workflowCopy.push(fnc.copy()));
    WorkflowManager.workflows.push(workflowCopy);
  }

  public static getWorkflows(): IRobotFunctionality[][] {
    return WorkflowManager.workflows;
  }
}
