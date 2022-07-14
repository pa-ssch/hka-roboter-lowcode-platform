import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { IParameterDefinition } from '../adapter-definition/interfaces/parameter-definition.interface';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';
import { VectorDriveFunctionality } from './functionalities/drive.vector-functionality';
import { VectorGoToChargerFunctionality } from './functionalities/go-to-charger.vector-functionality';
import { VectorGoToCubeFunctionality } from './functionalities/go-to-cube.vector-functionality';
import { VectorLeaveChargerFunctionality } from './functionalities/leave-charger.vector-functionality';
import { VectorLiftArmsFunctionality } from './functionalities/lift-arms.vector-functionality';
import { VectorLowerArmsFunctionality } from './functionalities/lower-arms.vector-functionality';
import { VectorOnStartupFunctionality } from './functionalities/on-startup.vector-functionality';
import { VectorRotateFunctionality } from './functionalities/rotate.vector-functionality';
import { VectorWaitFunctionality } from './functionalities/wait.vector-functionality';

export class VectorAdapterDefinition implements IRobotAdapter {
  identifier: string = 'vector-robot';
  name: string = 'Vector';

  parameter: IParameterDefinition[] = [
    new ParameterDefinition(
      'Adresse des Roboters',
      AdapterParameterType.string
    ),
    new ParameterDefinition('Entwicklermodus', AdapterParameterType.boolean),
  ];

  functionality: IRobotFunctionality[] = [
    new VectorOnStartupFunctionality(),
    new VectorWaitFunctionality(),
    new VectorDriveFunctionality(),
    new VectorRotateFunctionality(),
    new VectorGoToChargerFunctionality(),
    new VectorLeaveChargerFunctionality(),
    new VectorGoToCubeFunctionality(),
    new VectorLiftArmsFunctionality(),
    new VectorLowerArmsFunctionality(),
  ];

  validateParameter(parameterValues: (string | number | boolean)[]): string {
    if (parameterValues[0] == 'localhost:1234') {
      return '';
    } else {
      return 'Der Roboter ist nicht erreichbar';
    }
  }

  setNewWorkflows(workflows: IRobotFunctionality[][]): void {
    throw new Error('Method not implemented.');
    // TODO: ...
  }

  getAvailablePreviews(): any[] {
    throw new Error('Method not implemented.');
    // TODO: ...
  }
}
