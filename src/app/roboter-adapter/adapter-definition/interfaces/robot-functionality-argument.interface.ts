import { RobotDataType } from '../enums/robot-data-type.enum';

export interface IRobotFunctinoalityArgument {
  readonly identifier: string;
  readonly displayName: string;
  readonly dataType: RobotDataType;
}
