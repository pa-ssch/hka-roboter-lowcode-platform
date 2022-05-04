import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookieManager } from 'src/app/app.cookiemanager';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass'],
})
export class WorkspaceComponent implements OnInit {
  constructor(private _cookieService: CookieService) {}

  ngOnInit(): void {}

  logout() {
    this._cookieService.set(CookieManager.CurrentUserName, '');
    window.location.reload();
  }
}
