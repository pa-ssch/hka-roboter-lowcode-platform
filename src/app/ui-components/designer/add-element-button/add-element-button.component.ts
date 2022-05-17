import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-element-button',
  templateUrl: './add-element-button.component.html',
  styleUrls: ['./add-element-button.component.sass'],
  host: {
    '[id]': 'id',
    '[style.position]': 'position',
    '[style.left]': 'left',
    '[style.top]': 'top',
  },
})
export class AddElementButtonComponent {
  id: string;
  position: string;
  left: string;
  top: string;
}
