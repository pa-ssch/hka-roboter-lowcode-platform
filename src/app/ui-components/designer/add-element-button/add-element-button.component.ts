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

  private mousePosition: any;
  private dragOffset: any;
  private isDown: boolean;
  private btn: any;

  constructor() {
    this.mousePosition = {
      x: 0,
      y: 0,
    };
    this.isDown = false;
    this.dragOffset = [0, 0];
  }
  ngOnInit() {
    this.btn = document.getElementsByClassName('add-button-div')[0];
  }

  mousedown($event: any) {
    this.isDown = true;

    $event.preventDefault();
    this.dragOffset = [
      this.btn.offsetLeft - $event.clientX,
      this.btn.offsetTop - $event.clientY,
    ];
  }
  mousemove($event: any) {
    $event.preventDefault();

    if (this.isDown) {
      var mousePosition = {
        x: $event.clientX,
        y: $event.clientY,
      };

      this.btn.style.left = mousePosition.x + this.dragOffset[0] + 'px';
      this.btn.style.top = mousePosition.y + this.dragOffset[1] + 'px';
    }
  }
  mouseup($event: any) {
    this.isDown = false;
    $event.preventDefault();
  }
}
