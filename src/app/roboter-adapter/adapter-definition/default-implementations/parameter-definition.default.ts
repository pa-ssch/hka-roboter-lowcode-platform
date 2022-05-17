import { AdapterParameterType } from '../enums/adapter-parameter-type.enum';
import { IParameterDefinition } from '../interfaces/parameter-definition.interface';

export class ParameterDefinition implements IParameterDefinition {
  constructor(
    public readonly name: string,
    public readonly valueType: AdapterParameterType
  ) {}
}
