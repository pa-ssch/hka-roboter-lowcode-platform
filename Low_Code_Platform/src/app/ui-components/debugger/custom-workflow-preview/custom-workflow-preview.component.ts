import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-workflow-preview',
  templateUrl: './custom-workflow-preview.component.html',
  styleUrls: ['./custom-workflow-preview.component.sass'],
})
export class CustomWorkflowPreviewComponent {
  @Input()
  previewData: any;
  @Input()
  isPreviewMode: boolean;

  constructor() {
    throw new Error('Preview-type not implemented.');
  }
}
