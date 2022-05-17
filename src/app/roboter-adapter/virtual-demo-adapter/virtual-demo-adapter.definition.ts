import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { IParameterDefinition } from '../adapter-definition/interfaces/parameter-definition.interface';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality.interface';

export class VirtualDemoAdapterDefinition implements IRobotAdapter {
  identifier: string = 'virtual-demo-robot';
  name: string = 'Virtueller Demo Roboter';

  parameter: IParameterDefinition[] = [
    new ParameterDefinition('Beispiel 1', AdapterParameterType.boolean),
    new ParameterDefinition('Beispiel 2', AdapterParameterType.number),
  ];

  functionality: IRobotFunctionality[] = [];
  validateParameter = (_: AdapterParameterType[]): string => '';
}
