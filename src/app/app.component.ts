import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from './app.adapter-registration';
import { CookieManager } from './app.cookiemanager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'hka-roboter-lowcode-platform';
  adapterWorks: boolean = false;
  userIsLoggedIn: boolean = false;

  constructor(private _cookieService: CookieService) {}
  ngOnInit() {
    let roboterIdentifier = this._cookieService.get(
      CookieManager.RobotTypeCookieName
    );

    let parameterValues = JSON.parse(
      this._cookieService.get(CookieManager.ParameterCookieName)
    );

    let adapter = AdapterRegistration.getAdapterByIdentifier(roboterIdentifier);
    this.adapterWorks = !adapter.validateParameter(parameterValues);

    let loggedInUser = this._cookieService.get(CookieManager.CurrentUserName);
    if (loggedInUser) this.userIsLoggedIn = true;
  }
}
