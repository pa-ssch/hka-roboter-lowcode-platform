import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { WorkflowManager } from 'src/app/app.workflowmanager';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass'],
})
export class WorkspaceComponent {
  constructor(private _cookieService: CookieService) {}

  logout() {
    this._cookieService.set(CookieManager.CurrentUserName, '');
    window.location.reload();
  }

  openPreview() {
    let adapter = AdapterRegistration.getAdapterByIdentifier(
      this._cookieService.get(CookieManager.RobotTypeCookieName)
    );

    adapter.setNewWorkflows(WorkflowManager.workflows);
  }
}
