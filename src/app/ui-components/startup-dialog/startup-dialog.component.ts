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
  passwordFormGroup: FormGroup;
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

    let parameterFormControls = Object.fromEntries(
      Array.from({ length: maximumParameterCount + 1 }, (_, k) => [
        'parameter' + k,
        ['', Validators.required],
      ])
    );

    this.parameterFormGroup = this._formBuilder.group(parameterFormControls);
    this.parameterFormGroup.controls['parameter0'].setValue('n.a.');

    // Initialize the password form control
    this.passwordFormGroup = this._formBuilder.group({
      masterPassword: ['', Validators.required],
    });
  }

  commit() {
    alert(
      'alles klar, das speichere ich jetzt in einem cookie (masterPasswort verschlüsselt)'
    );
    // TODO: save it in a cookie
    window.location.reload();
  }

  validateParameterAndGoToNextStep(stepper: MatStepper) {
    let parameterValues = Object.values(this.parameterFormGroup.controls).map(
      (c) => c.value
    );
    parameterValues.shift();

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
    else {
      //TODO: does not work for virtual demo adapter (works when page three was visited via vector)
      stepper.next();
    }
  }
}
