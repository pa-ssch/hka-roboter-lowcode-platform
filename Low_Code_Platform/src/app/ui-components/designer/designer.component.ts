import { Component } from '@angular/core';
import { WorkflowManager } from 'src/app/app.workflowmanager';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.sass'],
})
export class DesignerComponent {
  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  addNewWorkflow(robotFunctionality: IRobotFunctionality) {
    WorkflowManager.push([robotFunctionality]);
  }

  getWorkflows() {
    return WorkflowManager.getWorkflows();
  }
}
