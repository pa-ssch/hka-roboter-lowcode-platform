import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DebuggerComponent } from './ui-components/debugger/debugger.component';
import { DesignerComponent } from './ui-components/designer/designer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkspaceComponent } from './ui-components/workspace/workspace.component';
import { StartupDialogComponent } from './ui-components/startup-dialog/startup-dialog.component';
import { LoginDialogComponent } from './ui-components/login-dialog/login-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule } from '@angular/material/menu';
import { CookieService } from 'ngx-cookie-service';
import { AddElementButtonComponent } from './ui-components/designer/add-element-button/add-element-button.component';
import { MatIconModule } from '@angular/material/icon';
import { WorkflowElementWhileLoopComponent } from './ui-components/designer/workflow-elements/workflow-element-while-loop/workflow-element-while-loop.component';
import { WorkflowElementTriggerComponent } from './ui-components/designer/workflow-elements/workflow-element-trigger/workflow-element-trigger.component';
import { WorkflowElementIfThenElseComponent } from './ui-components/designer/workflow-elements/workflow-element-if-then-else/workflow-element-if-then-else.component';
import { WorkflowElementDoSomethingComponent } from './ui-components/designer/workflow-elements/workflow-element-do-something/workflow-element-do-something.component';
import { WorkflowElementGetSomethingComponent } from './ui-components/designer/workflow-elements/workflow-element-get-something/workflow-element-get-something.component';
import { WorkflowElementLogicComponent } from './ui-components/designer/workflow-elements/workflow-element-logic/workflow-element-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    DebuggerComponent,
    DesignerComponent,
    WorkspaceComponent,
    StartupDialogComponent,
    LoginDialogComponent,
    AddElementButtonComponent,
    WorkflowElementWhileLoopComponent,
    WorkflowElementTriggerComponent,
    WorkflowElementIfThenElseComponent,
    WorkflowElementDoSomethingComponent,
    WorkflowElementGetSomethingComponent,
    WorkflowElementLogicComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
