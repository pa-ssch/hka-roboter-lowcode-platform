import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-workflow-preview',
  templateUrl: './custom-workflow-preview.component.html',
  styleUrls: ['./custom-workflow-preview.component.sass'],
})
export class CustomWorkflowPreviewComponent implements OnInit {
  @Input()
  previewData: any;

  constructor() {}

  ngOnInit(): void {}
}
