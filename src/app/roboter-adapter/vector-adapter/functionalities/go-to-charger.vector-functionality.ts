import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorGoToChargerFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'go-to-charger',
      RobotFunctionalityType.doSomething,
      'Fahre zur Ladestation',
      'Fahre zur Ladestation',
      RobotDataType.void,
      () => []
    );
  }
}
