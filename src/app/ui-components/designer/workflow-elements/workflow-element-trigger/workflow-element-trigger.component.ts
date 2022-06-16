import { Component, Input, OnInit } from '@angular/core';
import { TriggerFunctionality } from 'src/app/roboter-adapter/adapter-definition/abstract-classes/robot-functionality/robot-functionality-trigger.abstract';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-trigger',
  templateUrl: './workflow-element-trigger.component.html',
  styleUrls: ['./workflow-element-trigger.component.sass'],
})
export class WorkflowElementTriggerComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;
  triggerFunctionality: TriggerFunctionality;

  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  ngOnInit() {
    if (this.functionality instanceof TriggerFunctionality) {
      this.triggerFunctionality = this.functionality;
    } else {
      throw new Error('Functionality is not a trigger functionality');
    }
  }

  addFollowingElement(robotFunctionality: IRobotFunctionality) {
    this.triggerFunctionality.followingElements.push(robotFunctionality);
  }

  getFollowingElements(): IRobotFunctionality[][] {
    if (this.triggerFunctionality.followingElements.length > 0) {
      return [this.triggerFunctionality.followingElements];
    } else return [];
  }
}
