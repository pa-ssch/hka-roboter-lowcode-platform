import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VirtualDemoAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return {
      identifier: 'virtual-demo-robot',
      name: 'Virtueller Demo Roboter',
      parameter: [],
      validateParameter: (_) => '',
      functionality: [],
    };
  }
}
