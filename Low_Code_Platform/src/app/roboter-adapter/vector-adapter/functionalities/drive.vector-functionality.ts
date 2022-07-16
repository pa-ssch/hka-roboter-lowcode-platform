import { RobotFunctionalityArgument } from '../../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorDriveFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'drive',
      RobotFunctionalityType.doSomething,
      'Fahre n cm',
      'Fahre {0} cm',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'distance',
          'Strecke in cm',
          RobotDataType.number
        ),
      ]
    );
  }
}
