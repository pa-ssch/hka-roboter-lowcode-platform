import { RobotFunctionalityArgument } from '../../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorWaitFunctionality extends RobotFunctionality {
  constructor() {
    super(
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
    );
  }
}
