import { RobotFunctionalityArgument } from '../../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorRotateFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'rotate',
      RobotFunctionalityType.doSomething,
      'Drehe um n Grad',
      'Drehe um {0} Grad',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'degree',
          'Rotation in Grad (-360 bis 360)',
          RobotDataType.number // TODO: komma, -360 bis 360
        ),
      ]
    );
  }
}
