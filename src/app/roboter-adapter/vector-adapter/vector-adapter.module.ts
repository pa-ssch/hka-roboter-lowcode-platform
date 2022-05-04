import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRobotAdapter } from '../adapter-definition/adapter-definition.module';
import { AdapterDefinition } from './vector-adapter.definition';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VectorAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return new AdapterDefinition();
  }
}
