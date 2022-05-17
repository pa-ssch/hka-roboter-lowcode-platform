import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { CookieManager } from 'src/app/app.cookiemanager';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-adapter.interface';

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
    private _snackBar: MatSnackBar,
    private _cookieService: CookieService
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
    this._cookieService.set(
      CookieManager.RobotTypeCookieName,
      this.selectRobotFormGroup.value.selectedRobot.identifier
    );
    this._cookieService.set(
      CookieManager.MasterPasswordCookieName,
      this.passwordFormGroup.value.masterPassword
    );
    let parameterValues = Object.values(this.parameterFormGroup.controls).map(
      (c) => c.value
    );
    parameterValues.shift();
    this._cookieService.set(
      CookieManager.ParameterCookieName,
      JSON.stringify(parameterValues)
    );
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
      //TODO: does not work because all params are required, also when not visible
      stepper.next();
    }
  }
}
