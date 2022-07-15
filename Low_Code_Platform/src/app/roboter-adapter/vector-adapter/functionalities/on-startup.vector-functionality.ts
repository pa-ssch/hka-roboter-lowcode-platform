import { DefaultTriggerFunctionality } from '../../adapter-definition/default-implementations/trigger-functionality.default';
import { RobotDataType } from '../../adapter-definition/enums/robot-data-type.enum';

export class VectorOnStartupFunctionality extends DefaultTriggerFunctionality {
  constructor() {
    super(
      'on-startup',
      'Beim Start',
      'Beim Start',
      RobotDataType.void,
      () => []
    );
  }
}
