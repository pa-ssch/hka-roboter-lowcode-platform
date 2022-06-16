import { Component, Input } from '@angular/core';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-workflow-container',
  templateUrl: './workflow-container.component.html',
  styleUrls: ['./workflow-container.component.sass'],
})
export class WorkflowContainerComponent {
  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  @Input()
  workflows: IRobotFunctionality[][];

  addElement(
    robotFunctionality: IRobotFunctionality,
    workflow: IRobotFunctionality[],
    indexOfElement: number
  ) {
    workflow.splice(indexOfElement, 0, robotFunctionality);
  }

  deleteElement(workflow: IRobotFunctionality[], indexOfElement: number) {
    workflow.splice(indexOfElement, 1);
  }
}
