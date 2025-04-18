import { RobotDataType } from '../enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../enums/robot-functinality-type.enum';
import { IRobotFunctinoalityArgument } from '../interfaces/robot-functionality/robot-functionality-argument.interface';
import { IRobotFunctionality } from '../interfaces/robot-functionality/robot-functionality.interface';

export class RobotFunctionality implements IRobotFunctionality {
  public readonly actualArgumentValues: IRobotFunctinoalityArgument[] = [];

  constructor(
    public readonly identifier: string,
    public readonly type: RobotFunctionalityType,
    public readonly displayName: string,
    public readonly parameterizedDisplayName: string,
    public readonly resultType: RobotDataType,
    public requiredArguments: () => IRobotFunctinoalityArgument[]
  ) {
    this.actualArgumentValues = requiredArguments();
  }

  copy(): IRobotFunctionality {
    return new RobotFunctionality(
      this.identifier,
      this.type,
      this.displayName,
      this.parameterizedDisplayName,
      this.resultType,
      this.requiredArguments
    );
  }

  getFunctionalityList(): IRobotFunctionality[] {
    return [this];
  }

  getArgumentValue(identifier: string): any {
    return this.actualArgumentValues.find((a) => a.identifier == identifier)
      .value;
  }
}
