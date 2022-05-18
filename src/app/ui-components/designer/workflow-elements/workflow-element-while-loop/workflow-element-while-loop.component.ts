import { Component, Input, OnInit } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-while-loop',
  templateUrl: './workflow-element-while-loop.component.html',
  styleUrls: ['./workflow-element-while-loop.component.sass'],
})
export class WorkflowElementWhileLoopComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;

  constructor() {}

  ngOnInit(): void {}
}
