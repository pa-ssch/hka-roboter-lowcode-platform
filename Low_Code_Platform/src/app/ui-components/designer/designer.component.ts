import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdapterRegistration } from 'src/app/app.adapter-registration';
import { CookieManager } from 'src/app/app.cookiemanager';
import { WorkflowManager } from 'src/app/app.workflowmanager';
import { RobotFunctionalityType } from 'src/app/roboter-adapter/adapter-definition/enums/robot-functinality-type.enum';
import { IRobotFunctionality } from 'src/app/roboter-adapter/adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.sass'],
})
export class DesignerComponent {
  parallelWorkflowsAllowed: boolean;
  elementType: typeof RobotFunctionalityType = RobotFunctionalityType;

  constructor(cookieService: CookieService) {
    let adapter = AdapterRegistration.getAdapterByIdentifier(
      cookieService.get(CookieManager.RobotTypeCookieName)
    );

    this.parallelWorkflowsAllowed = adapter.supportsParallelWorkflows();
  }

  addNewWorkflow(robotFunctionality: IRobotFunctionality) {
    WorkflowManager.push([robotFunctionality]);
  }

  getWorkflows() {
    return WorkflowManager.getWorkflows();
  }
}
