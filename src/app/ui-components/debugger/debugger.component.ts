import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.sass'],
})
export class DebuggerComponent implements OnInit {
  @Input()
  previewData: any[];

  constructor() {}

  ngOnInit(): void {}
}
