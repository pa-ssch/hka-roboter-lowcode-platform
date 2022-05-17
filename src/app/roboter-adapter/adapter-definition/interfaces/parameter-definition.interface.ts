import { AdapterParameterType } from '../enums/adapter-parameter-type.enum';

export interface IParameterDefinition {
  readonly name: string;
  readonly valueType: AdapterParameterType;
}
