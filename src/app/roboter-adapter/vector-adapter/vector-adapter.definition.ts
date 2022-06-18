import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { IParameterDefinition } from '../adapter-definition/interfaces/parameter-definition.interface';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

export class VectorAdapterDefinition implements IRobotAdapter {
  identifier: string = 'vector-robot';
  name: string = 'Vector';

  parameter: IParameterDefinition[] = [
    new ParameterDefinition(
      'Adresse des Roboters',
      AdapterParameterType.string
    ),
    new ParameterDefinition('Entwicklermodus', AdapterParameterType.boolean),
  ];

  functionality: IRobotFunctionality[] = [];

  validateParameter(parameterValues: (string | number | boolean)[]): string {
    if (parameterValues[0] == 'localhost:1234') {
      return '';
    } else {
      return 'Der Roboter ist nicht erreichbar';
    }
  }

  setNewWorkflows(workflows: IRobotFunctionality[][]): void {
    throw new Error('Method not implemented.');
    // TODO: ...
  }

  getAvailablePreviews(): any[] {
    throw new Error('Method not implemented.');
    // TODO: ...
  }
}
