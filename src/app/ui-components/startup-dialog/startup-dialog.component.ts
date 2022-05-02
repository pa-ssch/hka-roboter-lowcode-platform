import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoboterAdapter as IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/adapter-definition.module';
import { VectorAdapterModule } from 'src/app/roboter-adapter/vector-adapter/vector-adapter.module';
import { VirtualDemoAdapterModule } from 'src/app/roboter-adapter/virtual-demo-adapter/virtual-demo-adapter.module';

@Component({
  selector: 'app-startup-dialog',
  templateUrl: './startup-dialog.component.html',
  styleUrls: ['./startup-dialog.component.sass'],
})
export class StartupDialogComponent implements OnInit {
  selectRobotFormGroup: FormGroup;
  parameterFormGroup: FormGroup;
  robots: IRobotAdapter[] = [
    VectorAdapterModule.GetAdapter(),
    VirtualDemoAdapterModule.GetAdapter(),
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the select robot form controls
    this.selectRobotFormGroup = this._formBuilder.group({
      selectedRobot: ['', Validators.required],
    });

    // Initialize the parameter form controls
    let maximumParameterCount = Math.max.apply(
      Math,
      this.robots.map((robot) => robot.getParameter().length)
    );

    let parameterNumbers = Array.from(
      { length: maximumParameterCount },
      (_v, k) => k + 1
    );
    let parameterFormControls = parameterNumbers.reduce(
      (a, v) => ({ ...a, ['parameter' + v]: ['', Validators.required] }),
      {}
    );

    this.parameterFormGroup = this._formBuilder.group(parameterFormControls);
  }
}
