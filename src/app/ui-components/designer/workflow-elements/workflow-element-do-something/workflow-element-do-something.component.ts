import { Component, Input, OnInit } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-do-something',
  templateUrl: './workflow-element-do-something.component.html',
  styleUrls: ['./workflow-element-do-something.component.sass'],
})
export class WorkflowElementDoSomethingComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;

  constructor() {}

  ngOnInit(): void {}
}
