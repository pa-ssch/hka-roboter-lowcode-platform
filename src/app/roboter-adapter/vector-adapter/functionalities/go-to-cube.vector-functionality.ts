import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorGoToCubeFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'go-to-Cube',
      RobotFunctionalityType.doSomething,
      'Fahre zum Würfel',
      'Fahre zum Würfel',
      RobotDataType.void,
      () => []
    );
  }
}
