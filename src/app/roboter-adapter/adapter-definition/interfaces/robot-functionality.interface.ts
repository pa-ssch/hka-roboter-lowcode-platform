import { RobotDataType } from '../enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from './robot-functionality-argument.interface';

export interface IRobotFunctionality {
  readonly identifier: string;
  readonly type: RobotFunctionalityType;
  readonly displayName: string;
  readonly allArguments: IRobotFunctinoalityArgument[];
  readonly resultType: RobotDataType;
  // TODO: reference (callback), generatecleartext, generateScript()
}
