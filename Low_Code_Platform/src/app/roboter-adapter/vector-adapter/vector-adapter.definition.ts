import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { IParameterDefinition } from '../adapter-definition/interfaces/parameter-definition.interface';
import { IPreviewGroup } from '../adapter-definition/interfaces/preview/preview-group.interface';
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
import { VectorApi } from './vector-adapter.module';

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

  async validateParameter(
    parameterValues: (string | number | boolean)[]
  ): Promise<string> {
    if (typeof parameterValues[0] === 'string')
      VectorApi.setUrl(parameterValues[0]);
    try {
      if ((await VectorApi.getStatus()) == 'connected') return '';
    } catch (error) {
      console.log(error);
    }
    return 'Der Roboter ist nicht erreichbar';
  }

  canExecute(): boolean {
    return true;
  }

  supportsParallelWorkflows(): boolean {
    return false;
  }

  supportsPreview(): boolean {
    return true;
  }

  setNewWorkflows(workflows: IRobotFunctionality[][]): void {
    throw new Error('Method not implemented.');
    // TODO: ...
  }

  getAvailablePreviews(): IPreviewGroup[] {
    throw new Error('Method not implemented.');
    // TODO: ...
  }

  execute(): IPreviewGroup[] {
    throw new Error('Method not implemented.');
    // TODO: ...
  }
}
