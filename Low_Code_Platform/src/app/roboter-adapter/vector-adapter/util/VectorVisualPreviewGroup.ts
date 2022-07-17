import { PreviewGroupType } from '../../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../../adapter-definition/interfaces/preview/preview-group.interface';

export class VisualPreviewGroup implements IPreviewGroup {
  isExecutionMode: boolean;
  name: string;
  type: PreviewGroupType;
  previewData: any;

  constructor() {
    // TODO: implement
    // Request the previewdata
    // vector sdk mapper has to generate images
  }
}
