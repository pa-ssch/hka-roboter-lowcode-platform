import { TriggerFunctionality } from '../abstract-classes/robot-functionality/robot-functionality-trigger.abstract';
import { RobotDataType } from '../enums/robot-data-type.enum';
import { IRobotFunctinoalityArgument } from '../interfaces/robot-functionality/robot-functionality-argument.interface';

export class DefaultTriggerFunctinoality extends TriggerFunctionality {
  constructor(
    public readonly identifier: string,
    public readonly displayName: string,
    public readonly parameterizedDisplayName: string,
    public readonly resultType: RobotDataType,
    public requiredArguments: () => IRobotFunctinoalityArgument[]
  ) {
    super();
  }

  copy(): DefaultTriggerFunctinoality {
    return new DefaultTriggerFunctinoality(
      this.identifier,
      this.displayName,
      this.parameterizedDisplayName,
      this.resultType,
      this.requiredArguments
    );
  }
}
