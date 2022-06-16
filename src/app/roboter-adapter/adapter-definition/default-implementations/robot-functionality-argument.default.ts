import { RobotDataType } from '../enums/robot-data-type.enum';
import { IRobotFunctinoalityArgument } from '../interfaces/robot-functionality/robot-functionality-argument.interface';

export class RobotFunctionalityArgument implements IRobotFunctinoalityArgument {
  public value: any;

  constructor(
    public identifier: string,
    public displayName: string,
    public dataType: RobotDataType,
    public customValues: any[] = []
  ) {}
}
