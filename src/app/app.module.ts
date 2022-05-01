import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DebuggerComponent } from './ui-components/debugger/debugger.component';
import { DesignerComponent } from './ui-components/designer/designer.component';

@NgModule({
  declarations: [
    AppComponent,
    DebuggerComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
