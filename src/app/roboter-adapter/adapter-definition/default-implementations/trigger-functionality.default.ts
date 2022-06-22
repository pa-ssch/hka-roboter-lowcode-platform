import { TriggerFunctionality } from '../abstract-classes/robot-functionality/robot-functionality-trigger.abstract';
import { RobotDataType } from '../enums/robot-data-type.enum';
import { IRobotFunctinoalityArgument } from '../interfaces/robot-functionality/robot-functionality-argument.interface';

export class DefaultTriggerFunctionality extends TriggerFunctionality {
  public readonly actualArgumentValues: IRobotFunctinoalityArgument[];

  constructor(
    public readonly identifier: string,
    public readonly displayName: string,
    public readonly parameterizedDisplayName: string,
    public readonly resultType: RobotDataType,
    public requiredArguments: () => IRobotFunctinoalityArgument[]
  ) {
    super();
    this.actualArgumentValues = requiredArguments();
  }

  copy(): DefaultTriggerFunctionality {
    return new DefaultTriggerFunctionality(
      this.identifier,
      this.displayName,
      this.parameterizedDisplayName,
      this.resultType,
      this.requiredArguments
    );
  }
}
