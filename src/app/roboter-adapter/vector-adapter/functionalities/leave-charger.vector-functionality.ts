import { RobotFunctionality } from '../../adapter-definition/default-implementations/robot-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../adapter-definition/enums/robot-functinality-type.enum';

export class VectorLeaveChargerFunctionality extends RobotFunctionality {
  constructor() {
    super(
      'leave-charger',
      RobotFunctionalityType.doSomething,
      'Verlasse Ladestation',
      'Verlasse Ladestation',
      RobotDataType.void,
      () => []
    );
  }
}
