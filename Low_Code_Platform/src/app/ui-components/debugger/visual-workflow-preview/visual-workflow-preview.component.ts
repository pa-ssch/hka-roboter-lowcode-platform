import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-visual-workflow-preview',
  templateUrl: './visual-workflow-preview.component.html',
  styleUrls: ['./visual-workflow-preview.component.sass'],
})
export class VisualWorkflowPreviewComponent implements OnInit {
  @Input()
  previewData: any;
  @Input()
  isPreviewMode: boolean;

  constructor() {}

  currentImage: string = '';
  currentStep: number = 0;

  ngOnInit(): void {
    if (!this.isPreviewMode) {
      this.currentImage = this.previewData[this.currentStep].src;
      this.currentStep = 1;
    }
  }

  turnOn() {
    this.currentImage = this.previewData[this.currentStep].src;
    this.currentStep = 1;
  }

  async run() {
    (<HTMLInputElement>document.getElementById('run-button')).disabled = true;
    (<HTMLInputElement>document.getElementById('step-button')).disabled = true;
    for (const element of this.previewData) {
      if (element.src) this.currentImage = element.src;
      else if (element.displayDuration)
        await new Promise((f) => setTimeout(f, 1000 * element.displayDuration));
    }
  }

  step() {
    (<HTMLInputElement>document.getElementById('run-button')).disabled = true;
    if (this.currentStep < this.previewData.length) {
      if (this.previewData[this.currentStep].src)
        this.currentImage = this.previewData[this.currentStep].src;
      this.currentStep++;
    }
  }
}
