import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { CookieManager } from 'src/app/app.cookiemanager';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-adapter.interface';
import { MatSelectChange } from '@angular/material/select';
import * as shajs from 'sha.js';

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
    this.refreshParametersForRobot(null);

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
      shajs('sha256')
        .update(this.passwordFormGroup.value.masterPassword)
        .digest('hex')
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

    this.selectRobotFormGroup.value.selectedRobot
      .validateParameter(parameterValues)
      .then((errorMessage: string) => {
        if (errorMessage)
          this._snackBar.open(
            `Die eingegebenen Parameter sind nicht gültig: ${errorMessage}`,
            'Ok',
            {
              duration: 3000,
            }
          );
        else {
          stepper.next();
        }
      });
  }

  refreshParametersForRobot(selectedRobot: IRobotAdapter) {
    let maximumParameterCount = selectedRobot?.parameter.length ?? 0;

    let parameterFormControls = Object.fromEntries(
      Array.from({ length: maximumParameterCount + 1 }, (_, k) => [
        'parameter' + k,
        ['', Validators.required],
      ])
    );

    this.parameterFormGroup = this._formBuilder.group(parameterFormControls);
    this.parameterFormGroup.controls['parameter0'].setValue('n.a.');
  }
}
