import { PreviewGroupType } from '../../enums/preview-group-type.enum';

export interface IPreviewGroup {
  readonly name: string;
  readonly type: PreviewGroupType;
}
