import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AdapterDefinitionModule {}

export interface IRobotAdapter {
  readonly identifier: string;
  readonly name: string;
  readonly parameter: IParameterDefinition[];

  validateParameter(parameterValues: (string | number | boolean)[]): string;
}

export interface IParameterDefinition {
  readonly name: string;
  readonly valueType: 'string' | 'number' | 'boolean';
}

export class ParameterDefinition implements IParameterDefinition {
  constructor(
    public readonly name: string,
    public readonly valueType: 'string' | 'number' | 'boolean'
  ) {}
}
