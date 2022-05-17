import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { RobotFunctionalityArgument } from '../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctinoality as RobotFunctionality } from '../adapter-definition/default-implementations/robot-functionality.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { RobotDataType } from '../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../adapter-definition/enums/robot-functinality-type.enum';
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

  functionality: IRobotFunctionality[] = [
    new RobotFunctionality(
      'main-loop',
      RobotFunctionalityType.whileLoop,
      'Dauerhaft',
      'Dauerhaft',
      RobotDataType.void,
      () => []
    ),
    new RobotFunctionality(
      'on-startup',
      RobotFunctionalityType.trigger,
      'Beim Start',
      'Beim Start',
      RobotDataType.void,
      () => []
    ),
    new RobotFunctionality(
      'wait',
      RobotFunctionalityType.doSomething,
      'Warte für n Sekunden',
      'Warte für {0} Sekunden',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'wait-seconds',
          'Wartezeit in Sekunden',
          RobotDataType.number
        ),
      ]
    ),
    new RobotFunctionality(
      'switch-light',
      RobotFunctionalityType.doSomething,
      'Schalte Lampe ein oder aus',
      'Schalte {0} {1}',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'light-id',
          'Betroffene Lampe',
          RobotDataType.custom,
          ['Lampe 1', 'Lampe 2']
        ),
        new RobotFunctionalityArgument(
          'new-light-state',
          'Neuer Status der Lampe',
          RobotDataType.boolean
        ),
      ]
    ),
  ];
  validateParameter = (_: AdapterParameterType[]): string => '';
}
