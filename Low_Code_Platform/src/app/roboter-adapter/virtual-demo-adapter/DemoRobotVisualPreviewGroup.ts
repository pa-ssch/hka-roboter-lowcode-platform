import { PreviewGroupType } from '../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';
import { DemoBotLamp } from './virtual-demo-adapter.definition';

export class DemoRobotVisualPreviewGroup implements IPreviewGroup {
  name: string;
  type: PreviewGroupType;
  previewData: ImagePreview[] = [];
  isExecutionMode: boolean;

  constructor(workflow: IRobotFunctionality[], workflowNumber: number) {
    this.name = `Visualisierung Workflow ${workflowNumber}`;
    this.type = PreviewGroupType.visual;
    let robotState: string = '00';
    this.previewData.push(
      new ImagePreview(`/assets/virtual-demo-adapter/${robotState}.png`, 0)
    );

    workflow.forEach((workflowElement) => {
      workflowElement.getFunctionalityList().forEach((functionality) => {
        if (functionality.identifier === 'wait') {
          this.previewData.push(
            new ImagePreview(
              null,
              functionality.getArgumentValue('wait-seconds')
            )
          );
        } else if (functionality.identifier === 'switch-light') {
          let lamp = functionality.getArgumentValue('light-id') as DemoBotLamp;
          lamp.toggle(functionality.getArgumentValue('new-light-state'));
          robotState = lamp.updateRobotState(robotState);
          this.previewData.push(
            new ImagePreview(
              `/assets/virtual-demo-adapter/${robotState}.png`,
              0
            )
          );
        }
      });
    });
  }

  kill() {}
}

export class ImagePreview {
  constructor(
    public readonly src: string,
    public readonly displayDuration: number
  ) {}
}
