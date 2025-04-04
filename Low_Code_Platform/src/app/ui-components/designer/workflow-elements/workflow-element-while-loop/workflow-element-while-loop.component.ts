import { Component, Input } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-while-loop',
  templateUrl: './workflow-element-while-loop.component.html',
  styleUrls: ['./workflow-element-while-loop.component.sass'],
})
export class WorkflowElementWhileLoopComponent {
  @Input()
  functionality: IRobotFunctionality;
}
