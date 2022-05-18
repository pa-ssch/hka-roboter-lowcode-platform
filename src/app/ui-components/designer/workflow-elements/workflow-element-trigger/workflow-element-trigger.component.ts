import { Component, Input, OnInit } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-trigger',
  templateUrl: './workflow-element-trigger.component.html',
  styleUrls: ['./workflow-element-trigger.component.sass'],
})
export class WorkflowElementTriggerComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;

  constructor() {}

  ngOnInit(): void {}
}
