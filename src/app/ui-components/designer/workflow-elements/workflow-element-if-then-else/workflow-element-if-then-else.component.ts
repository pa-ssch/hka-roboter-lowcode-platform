import { Component, Input, OnInit } from '@angular/core';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality.interface';

@Component({
  selector: 'app-workflow-element-if-then-else',
  templateUrl: './workflow-element-if-then-else.component.html',
  styleUrls: ['./workflow-element-if-then-else.component.sass'],
})
export class WorkflowElementIfThenElseComponent implements OnInit {
  @Input()
  functionality: IRobotFunctionality;

  constructor() {}

  ngOnInit(): void {}
}
