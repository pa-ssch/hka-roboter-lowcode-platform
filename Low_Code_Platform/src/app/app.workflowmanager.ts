import { IRobotFunctionality } from './roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

export class WorkflowManager {
  static overWriteWorkflows(newWorkflows: any) {
    if (newWorkflows instanceof Array) this.workflows = newWorkflows;
  }

  private static workflows: IRobotFunctionality[][] = [];

  public static push(workflow: IRobotFunctionality[]): void {
    let workflowCopy: IRobotFunctionality[] = [];
    workflow.forEach((fnc) => workflowCopy.push(fnc.copy()));
    WorkflowManager.workflows.push(workflowCopy);
  }

  public static getWorkflows(): IRobotFunctionality[][] {
    return WorkflowManager.workflows;
  }
}
