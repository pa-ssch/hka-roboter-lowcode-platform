import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRoboterAdapter } from '../adapter-definition/adapter-definition.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VirtualDemoAdapterModule {
  public static GetAdapter(): IRoboterAdapter {
    return {
      name: 'Virtueller Demo Roboter',
      getParameter: () => [],
    };
  }
}
