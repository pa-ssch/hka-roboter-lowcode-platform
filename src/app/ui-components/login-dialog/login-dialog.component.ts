import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/adapter-definition.module';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.sass'],
})
export class LoginDialogComponent implements OnInit {
  nameFormGroup: FormGroup;
  robotAdapter: IRobotAdapter;

  constructor(
    private _formBuilder: FormBuilder,
    private _cookieService: CookieService
  ) {}

  ngOnInit() {
    this.nameFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
    });

    let adapterIdentifier = this._cookieService.get(
      CookieManager.RobotTypeCookieName
    );
    this.robotAdapter =
      AdapterRegistration.getAdapterByIdentifier(adapterIdentifier);
  }

  commit() {
    this._cookieService.set(
      CookieManager.CurrentUserName,
      this.nameFormGroup.value.name
    );
    //TODO: use indexedDB for the user management
    window.location.reload();
  }
}
