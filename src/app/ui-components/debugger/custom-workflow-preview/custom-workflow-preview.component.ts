import { Component, Input } from '@angular/core';
import { IPreviewGroup } from 'src/app/roboter-adapter/adapter-definition/interfaces/preview/preview-group.interface';

@Component({
  selector: 'app-custom-workflow-preview',
  templateUrl: './custom-workflow-preview.component.html',
  styleUrls: ['./custom-workflow-preview.component.sass'],
})
export class CustomWorkflowPreviewComponent {
  @Input()
  previewData: IPreviewGroup;

  constructor() {
    throw new Error('Preview-type not implemented.');
  }
}
