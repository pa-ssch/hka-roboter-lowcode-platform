import { RobotDataType } from '../../enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from '../../interfaces/robot-functionality/robot-functionality-argument.interface';
import { IRobotFunctionality } from '../../interfaces/robot-functionality/robot-functionality.interface';

export abstract class TriggerFunctionality implements IRobotFunctionality {
  type: RobotFunctionalityType = RobotFunctionalityType.trigger;
  followingElements: IRobotFunctionality[] = [];
  abstract readonly actualArgumentValues: IRobotFunctinoalityArgument[];

  abstract identifier: string;
  abstract displayName: string;
  abstract parameterizedDisplayName: string;
  abstract resultType: RobotDataType;

  abstract requiredArguments(): IRobotFunctinoalityArgument[];

  abstract copy(): IRobotFunctionality;

  getFunctionalityList(): IRobotFunctionality[] {
    return [this as IRobotFunctionality].concat(this.followingElements);
  }

  getArgumentValue(identifier: string): any {
    return this.actualArgumentValues.find((a) => a.identifier === identifier)
      .value;
  }
}
