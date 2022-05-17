import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorAdapterDefinition } from './vector-adapter.definition';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VectorAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return new VectorAdapterDefinition();
  }
}
