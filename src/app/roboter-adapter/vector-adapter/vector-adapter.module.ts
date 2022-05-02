import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRoboterAdapter } from '../adapter-definition/adapter-definition.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VectorAdapterModule {
  public static GetAdapter(): IRoboterAdapter {
    return { name: 'Vector' };
  }
}
