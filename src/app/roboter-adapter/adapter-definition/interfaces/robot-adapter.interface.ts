import { AdapterParameterType } from '../enums/adapter-parameter-type.enum';
import { IParameterDefinition } from './parameter-definition.interface';
import { IRobotFunctionality } from './robot-functionality.interface';

export interface IRobotAdapter {
  readonly identifier: string;
  readonly name: string;
  readonly parameter: IParameterDefinition[];
  readonly functionality: IRobotFunctionality[];
  validateParameter(parameterValues: AdapterParameterType[]): string;
}
