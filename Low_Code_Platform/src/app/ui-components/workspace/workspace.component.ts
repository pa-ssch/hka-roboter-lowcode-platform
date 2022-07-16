import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { WorkflowManager } from 'src/app/app.workflowmanager';
import { IPreviewGroup } from 'src/app/roboter-adapter/adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-adapter.interface';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

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

  getCurrentUserName(): string {
    return this._cookieService.get(CookieManager.CurrentUserName);
  }

  openPreview() {
    let adapter = this.getCurrentRobotAdapter();
    adapter.setNewWorkflows(WorkflowManager.getWorkflows());
    this.availablePreviews = adapter.getAvailablePreviews();
  }

  runWorkflows() {
    if (!this.executeAvailable) return;

    let adapter = this.getCurrentRobotAdapter();
    adapter.setNewWorkflows(WorkflowManager.getWorkflows());
    this.availablePreviews = adapter.getAvailablePreviews();
    adapter.execute();
    this.availablePreviews.forEach(
      (previewGroup) => (previewGroup.isExecutionMode = true)
    );
  }

  saveWorkflows() {
    saveText(
      JSON.stringify(WorkflowManager.getWorkflows()),
      `Workflow-${this.getCurrentUserName()}.hka`
    );
  }

  public async onFileSelected(event: any) {
    const file: File = event.target.files[0];
    let newWorkflows: IRobotFunctionality[][] = JSON.parse(await file.text());
    WorkflowManager.overWriteWorkflows(newWorkflows);
    // TODO (low prio): Does not works yet
  }
}

function saveText(text: string, filename: string) {
  let a = document.createElement('a');
  a.setAttribute(
    'href',
    'data:text/plain;charset=utf-u,' + encodeURIComponent(text)
  );
  a.setAttribute('download', filename);
  a.click();
}
