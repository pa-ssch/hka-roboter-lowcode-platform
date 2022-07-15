import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { VirtualDemoAdapterDefinition } from './virtual-demo-adapter.definition';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VirtualDemoAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return new VirtualDemoAdapterDefinition();
  }
}
