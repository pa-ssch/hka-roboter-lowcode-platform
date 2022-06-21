import { RobotDataType } from '../../enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../../enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from './robot-functionality-argument.interface';

export interface IRobotFunctionality {
  readonly identifier: string;
  readonly type: RobotFunctionalityType;
  readonly displayName: string;
  readonly parameterizedDisplayName: string;
  readonly resultType: RobotDataType;
  requiredArguments(): IRobotFunctinoalityArgument[];

  /** returns a list containing the affected functionality and the underlying functionalities (if any) */
  getFunctionalityList(): IRobotFunctionality[];

  copy(): IRobotFunctionality;
}
