import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AdapterRegistration } from 'src/app/app.adapterRegistration';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/adapter-definition.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-startup-dialog',
  templateUrl: './startup-dialog.component.html',
  styleUrls: ['./startup-dialog.component.sass'],
})
export class StartupDialogComponent implements OnInit {
  selectRobotFormGroup: FormGroup;
  parameterFormGroup: FormGroup;
  robots: IRobotAdapter[] = AdapterRegistration.getRegisteredAdapter();

  constructor(
    private _formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    // Initialize the select robot form controls
    this.selectRobotFormGroup = this._formBuilder.group({
      selectedRobot: ['', Validators.required],
    });

    // Initialize the parameter form controls
    let maximumParameterCount = Math.max.apply(
      Math,
      this.robots.map((robot) => robot.parameter.length)
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

  commit() {
    alert('alles eingegeben -> loginpage anzeigen');
  }

  validateParameterAndGoToNextStep(stepper: MatStepper) {
    let parameterValues = [];
    for (let parameterKey in this.parameterFormGroup.controls) {
      parameterValues.push(
        this.parameterFormGroup.controls[parameterKey].value
      );
    }

    let errorMessage =
      this.selectRobotFormGroup.value.selectedRobot.validateParameter(
        parameterValues
      );

    if (errorMessage)
      this._snackBar.open(
        `Die eingegebenen Parameter sind nicht gültig: ${errorMessage}`,
        'Ok',
        {
          duration: 3000,
        }
      );
    else stepper.next();
  }
}
