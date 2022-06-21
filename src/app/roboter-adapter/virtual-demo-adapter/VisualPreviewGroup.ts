import { PreviewGroupType } from '../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

export class VisualPreviewGroup implements IPreviewGroup {
  name: string;
  type: PreviewGroupType;
  previewData: any;

  constructor(workflow: IRobotFunctionality[], workflowNumber: number) {
    this.name = `Visualisierung Workflow ${workflowNumber}`;
    this.type = PreviewGroupType.visual;
    // TODO: define a list of which images are displayed in which order.
  }
}
