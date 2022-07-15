import { AdapterParameterType } from '../enums/adapter-parameter-type.enum';
import { IParameterDefinition } from './parameter-definition.interface';
import { IPreviewGroup } from './preview/preview-group.interface';
import { IRobotFunctionality } from './robot-functionality/robot-functionality.interface';

export interface IRobotAdapter {
  readonly identifier: string;
  readonly name: string;
  readonly parameter: IParameterDefinition[];
  readonly functionality: IRobotFunctionality[];
  validateParameter(parameterValues: AdapterParameterType[]): Promise<string>;
  setNewWorkflows(workflows: IRobotFunctionality[][]): void;
  getAvailablePreviews(): IPreviewGroup[];
}
