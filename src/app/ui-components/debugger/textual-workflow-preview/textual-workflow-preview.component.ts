import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textual-workflow-preview',
  templateUrl: './textual-workflow-preview.component.html',
  styleUrls: ['./textual-workflow-preview.component.sass'],
})
export class TextualWorkflowPreviewComponent implements OnInit {
  @Input()
  previewData: any;

  constructor() {}

  ngOnInit(): void {}
}
