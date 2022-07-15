import { ParameterDefinition } from '../adapter-definition/default-implementations/parameter-definition.default';
import { RobotFunctionalityArgument } from '../adapter-definition/default-implementations/robot-functionality-argument.default';
import { RobotFunctionality as RobotFunctionality } from '../adapter-definition/default-implementations/robot-functionality.default';
import { DefaultTriggerFunctionality as DefaultTriggerFunctionality } from '../adapter-definition/default-implementations/trigger-functionality.default';
import { AdapterParameterType } from '../adapter-definition/enums/adapter-parameter-type.enum';
import { RobotDataType } from '../adapter-definition/enums/robot-data-type.enum';
import { RobotFunctionalityType } from '../adapter-definition/enums/robot-functinality-type.enum';
import { IParameterDefinition } from '../adapter-definition/interfaces/parameter-definition.interface';
import { IPreviewGroup } from '../adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotAdapter } from '../adapter-definition/interfaces/robot-adapter.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';
import { TextPreviewGroup } from './TextPreviewGroup';
import { VisualPreviewGroup } from './VisualPreviewGroup';

export class VirtualDemoAdapterDefinition implements IRobotAdapter {
  identifier: string = 'virtual-demo-robot';
  name: string = 'Virtueller Demo Roboter';
  private currentWorkflows: IRobotFunctionality[][];

  parameter: IParameterDefinition[] = [
    new ParameterDefinition('Beispiel 1', AdapterParameterType.boolean),
  ];

  functionality: IRobotFunctionality[] = [
    new RobotFunctionality(
      'main-loop',
      RobotFunctionalityType.whileLoop,
      'Dauerhaft',
      'Dauerhaft',
      RobotDataType.void,
      () => []
    ),
    new DefaultTriggerFunctionality(
      'on-startup',
      'Beim Start',
      'Beim Start',
      RobotDataType.void,
      () => []
    ),
    new RobotFunctionality(
      'wait',
      RobotFunctionalityType.doSomething,
      'Warte für n Sekunden',
      'Warte für {0} Sekunden',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'wait-seconds',
          'Wartezeit in Sekunden',
          RobotDataType.number
        ),
      ]
    ),
    new RobotFunctionality(
      'switch-light',
      RobotFunctionalityType.doSomething,
      'Schalte Lampe ein oder aus',
      'Schalte {0} {1}',
      RobotDataType.void,
      () => [
        new RobotFunctionalityArgument(
          'light-id',
          'Betroffene Lampe',
          RobotDataType.custom,
          [new DemoBotLeftLamp(), new DemoBotRightLamp()]
        ),
        new RobotFunctionalityArgument(
          'new-light-state',
          'Neuer Status der Lampe',
          RobotDataType.boolean
        ),
      ]
    ),
  ];
  validateParameter = async (_: AdapterParameterType[]): Promise<string> => '';

  setNewWorkflows(workflows: IRobotFunctionality[][]): void {
    this.currentWorkflows = workflows;
  }

  getAvailablePreviews(): IPreviewGroup[] {
    let previews: IPreviewGroup[] = [];

    this.currentWorkflows.forEach((workflow, index) => {
      previews.push(new TextPreviewGroup(workflow, index + 1));
      previews.push(new VisualPreviewGroup(workflow, index + 1));
    });

    return previews;
  }

  canExecute(): boolean {
    return false;
  }

  supportsParallelWorkflows(): boolean {
    return true;
  }

  supportsPreview(): boolean {
    return true;
  }
}

export abstract class DemoBotLamp {
  abstract toString(): string;
  abstract updateRobotState(oldState: string): string;

  isOn: boolean = false;

  toggle(turnOn: boolean) {
    this.isOn = turnOn;
  }
}

class DemoBotLeftLamp extends DemoBotLamp {
  updateRobotState(oldState: string): string {
    return (this.isOn ? '1' : '0') + oldState.charAt(1);
  }

  toString(): string {
    return 'Lampe 1';
  }
}

class DemoBotRightLamp extends DemoBotLamp {
  updateRobotState(oldState: string): string {
    return oldState.charAt(0) + (this.isOn ? '1' : '0');
  }

  toString(): string {
    return 'Lampe 2';
  }
}
