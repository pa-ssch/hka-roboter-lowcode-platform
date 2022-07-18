import { PreviewGroupType } from '../../enums/preview-group-type.enum';

export interface IPreviewGroup {
  kill(): void;
  readonly name: string;
  readonly type: PreviewGroupType;
  readonly previewData: any;
  isExecutionMode: boolean;
}
