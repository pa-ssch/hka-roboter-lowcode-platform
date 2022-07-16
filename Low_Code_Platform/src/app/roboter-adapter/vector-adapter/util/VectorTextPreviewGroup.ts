import { PreviewGroupType } from '../../adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from '../../adapter-definition/interfaces/preview/preview-group.interface';

export class TextPreviewGroup implements IPreviewGroup {
  name: string;
  type: PreviewGroupType;
  previewData: any;
}
// TODO: implement
