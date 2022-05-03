import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRobotAdapter } from '../adapter-definition/adapter-definition.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VirtualDemoAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return {
      name: 'Virtueller Demo Roboter',
      parameter: [],
      validateParameter: (_parameterValues) => '',
    };
  }
}
