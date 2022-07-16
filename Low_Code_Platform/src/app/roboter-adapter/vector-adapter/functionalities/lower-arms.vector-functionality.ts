import { RobotFunctionalityArgument } from '../../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';
import {
  VectorArmsSpeedFast,
  VectorArmsSpeedModerate,
  VectorArmsSpeedSlow,
} from '../util/Vector-arms-speed';

export class VectorLowerArmsFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'lower-arms',
      RobotFunctionalityType.doSomething,
      'Arme absetzen',
      'Arme {0} absetzen',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'speed',
          'Geschwindigkeit',
          RobotDataType.custom,
          [
            new VectorArmsSpeedSlow(),
            new VectorArmsSpeedModerate(),
            new VectorArmsSpeedFast(),
          ]
        ),
      ]
    );
  }
}
