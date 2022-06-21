import { PreviewGroupType } from '../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../adapter-definition/interfaces/preview/preview-group.interface';
import { IRobotFunctionality } from '../adapter-definition/interfaces/robot-functionality/robot-functionality.interface';

export class TextPreviewGroup implements IPreviewGroup {
  name: string;
  type: PreviewGroupType;
  previewData: any;

  constructor(workflow: IRobotFunctionality[], workflowNumber: number) {
    this.name = `Debugging Workflow ${workflowNumber}`;
    this.type = PreviewGroupType.textual;
    // TODO: define a list of what comes in what order (for the debug arrow)
    // define how what and how indented is written down
  }
}
