import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textual-workflow-preview',
  templateUrl: './textual-workflow-preview.component.html',
  styleUrls: ['./textual-workflow-preview.component.sass'],
})
export class TextualWorkflowPreviewComponent implements OnInit {
  @Input()
  previewData: any;
  currentStep: number = 0;
  robotIsOn: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  turnOn() {
    this.robotIsOn = true;
  }

  async run() {
    (<HTMLInputElement>document.getElementById('run-button')).disabled = true;
    (<HTMLInputElement>document.getElementById('step-button')).disabled = true;
    for (const element of this.previewData.steps) {
      this.currentStep = element;
      await new Promise((f) => setTimeout(f, 500));
    }
  }

  step() {
    (<HTMLInputElement>document.getElementById('run-button')).disabled = true;
    this.currentStep++;
  }
}
