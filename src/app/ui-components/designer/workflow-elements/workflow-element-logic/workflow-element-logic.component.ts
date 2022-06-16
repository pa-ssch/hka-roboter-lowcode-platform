import { Component, Input } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-logic',
  templateUrl: './workflow-element-logic.component.html',
  styleUrls: ['./workflow-element-logic.component.sass'],
})
export class WorkflowElementLogicComponent {
  @Input()
  functionality: IRobotFunctionality;
}
