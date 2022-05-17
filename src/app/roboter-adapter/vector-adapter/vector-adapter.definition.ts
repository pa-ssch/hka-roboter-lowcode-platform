import {
  AdapterParameterType,
  IParameterDefinition,
  IRobotAdapter,
  ParameterDefinition,
} from '../adapter-definition/adapter-definition.module';

export class AdapterDefinition implements IRobotAdapter {
  identifier: string = 'vector-robot';
  name: string = 'Vector';

  parameter: IParameterDefinition[] = [
    new ParameterDefinition(
      'Adresse des Roboters',
      AdapterParameterType.string
    ),
    new ParameterDefinition('Entwicklermodus', AdapterParameterType.boolean),
  ];

  validateParameter(parameterValues: (string | number | boolean)[]): string {
    if (parameterValues[0] == 'localhost:1234') {
      return '';
    } else {
      return 'Der Roboter ist nicht erreichbar';
    }
  }
}
