import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AdapterDefinitionModule {}

export interface IRoboterAdapter {
  readonly name: string;
  getParameter(): IParameterDefinition[];
}

export interface IParameterDefinition {
  readonly name: string;
  readonly valueType: 'string' | 'number' | 'boolean';
}
