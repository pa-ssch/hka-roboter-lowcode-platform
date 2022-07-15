import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { WorkflowManager } from 'src/app/app.workflowmanager';
import { IPreviewGroup } from 'src/app/roboter-adapter/adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-adapter.interface';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.sass'],
})
export class WorkspaceComponent {
  availablePreviews: IPreviewGroup[];

  previewAvailable: boolean;
  executeAvailable: boolean;

  constructor(private _cookieService: CookieService) {
    let adapter = this.getCurrentRobotAdapter();

    this.previewAvailable = adapter.supportsPreview();
    this.executeAvailable = adapter.canExecute();
  }

  logout() {
    this._cookieService.set(CookieManager.CurrentUserName, '');
    window.location.reload();
  }

  getCurrentRobotAdapter(): IRobotAdapter {
    return AdapterRegistration.getAdapterByIdentifier(
      this._cookieService.get(CookieManager.RobotTypeCookieName)
    );
  }

  openPreview() {
    let adapter = this.getCurrentRobotAdapter();
    adapter.setNewWorkflows(WorkflowManager.getWorkflows());
    this.availablePreviews = adapter.getAvailablePreviews();
  }

  runWorkflows() {
    //TODO ...
  }

  saveWorkflows() {
    //TODO ...
  }

  loadWorkflows() {
    //TODO ...
  }
}
