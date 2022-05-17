import { RobotDataType } from '../enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from '../interfaces/robot-functionality-argument.interface';
import { IRobotFunctionality } from '../interfaces/robot-functionality.interface';

export class RobotFunctinoality implements IRobotFunctionality {
  constructor(
    public readonly identifier: string,
    public readonly type: RobotFunctionalityType,
    public readonly displayName: string,
    public readonly resultType: RobotDataType,
    public requiredArguments: () => IRobotFunctinoalityArgument[],
    public perform: (...args: IRobotFunctinoalityArgument[]) => RobotDataType
  ) {}
}
