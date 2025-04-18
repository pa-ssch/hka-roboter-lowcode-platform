import { Component } from '@angular/core';
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

    if (this._cookieService.check(CookieManager.ParameterCookieName)) {
      let parameterValues = JSON.parse(
        this._cookieService.get(CookieManager.ParameterCookieName)
      );

      let adapter =
        AdapterRegistration.getAdapterByIdentifier(roboterIdentifier);
      adapter
        .validateParameter(parameterValues)
        .then((error) => (this.adapterWorks = !error));
    }

    let loggedInUser = this._cookieService.get(CookieManager.CurrentUserName);
    if (loggedInUser) this.userIsLoggedIn = true;
  }
}
