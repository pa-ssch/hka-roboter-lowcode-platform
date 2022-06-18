import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-workflow-preview',
  templateUrl: './visual-workflow-preview.component.html',
  styleUrls: ['./visual-workflow-preview.component.sass'],
})
export class VisualWorkflowPreviewComponent implements OnInit {
  @Input()
  previewData: any;

  constructor() {}

  ngOnInit(): void {}
}
