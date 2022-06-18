import { Component, Input, OnInit } from '@angular/core';
import { PreviewGroupType } from 'src/app/roboter-adapter/adapter-definition/enums/preview-group-type.enum';
import { IPreviewGroup } from 'src/app/roboter-adapter/adapter-definition/interfaces/preview/preview-group.interface';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  styleUrls: ['./debugger.component.sass'],
})
export class DebuggerComponent implements OnInit {
  previewGroupType: typeof PreviewGroupType = PreviewGroupType;

  @Input()
  previewGroups: IPreviewGroup[];

  ngOnInit(): void {}
}
