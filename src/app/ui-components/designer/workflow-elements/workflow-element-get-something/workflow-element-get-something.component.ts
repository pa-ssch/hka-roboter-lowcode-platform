import { Component, Input, OnInit } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-get-something',
  templateUrl: './workflow-element-get-something.component.html',
  styleUrls: ['./workflow-element-get-something.component.sass'],
})
export class WorkflowElementGetSomethingComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;

  constructor() {}

  ngOnInit(): void {}
}
