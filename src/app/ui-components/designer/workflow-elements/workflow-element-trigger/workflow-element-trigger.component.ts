import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-trigger',
  templateUrl: './workflow-element-trigger.component.html',
  styleUrls: ['./workflow-element-trigger.component.sass'],
})
export class WorkflowElementTriggerComponent {
  @Input()
  functionality: IRobotFunctionality;

  @Output() addElementRequest = new EventEmitter<IRobotFunctionality>();

  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  addFollowingElement(robotFunctionality: IRobotFunctionality) {
    this.addElementRequest.emit(robotFunctionality);
    //TODO: this schould hold the elements by itself, because, when you delete the trigger,
    // the following element should be deleted too
  }
}
