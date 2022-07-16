import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VectorAdapterDefinition } from './vector-adapter.definition';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { VectorApiService } from './util/vector-api.service';

export let VectorApi: VectorApiService;

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VectorAdapterModule {
  constructor(private vectorApi: VectorApiService) {
    VectorApi = this.vectorApi;
  }

  public static getAdapter(): IRobotAdapter {
    return new VectorAdapterDefinition();
  }
}
