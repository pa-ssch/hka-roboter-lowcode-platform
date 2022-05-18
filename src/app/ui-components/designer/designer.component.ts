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

  newWorkflowAllowedElements = [
    RobotFunctionalityType.whileLoop,
    RobotFunctionalityType.trigger,
  ];
  addNewWorkflow(identifier: string) {
    console.log(identifier);
    this.workflows.push(null);
  }
}
