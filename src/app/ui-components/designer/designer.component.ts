import { Component } from '@angular/core';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.sass'],
})
export class DesignerComponent {
  public workflows: IRobotFunctionality[][] = [];

  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  addNewWorkflow(robotFunctionality: IRobotFunctionality) {
    console.log(robotFunctionality.identifier);
    this.workflows.push([robotFunctionality]);
  }

  addElement(
    robotFunctionality: IRobotFunctionality,
    workflow: IRobotFunctionality[],
    indexOfElement: number
  ) {
    workflow.splice(indexOfElement + 1, 0, robotFunctionality);
  }
}
