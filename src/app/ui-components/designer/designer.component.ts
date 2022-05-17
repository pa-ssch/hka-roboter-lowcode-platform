import {
  Component,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AddElementButtonComponent } from './add-element-button/add-element-button.component';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.sass'],
})
export class DesignerComponent implements OnInit {
  constructor() {}
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  components: any = [];

  // Expose class so that it can be used in the template
  draggableComponentClass = AddElementButtonComponent;

  ngOnInit(): void {
    // generate first add-button at 100;100
  }

  addComponent(componentClass: Type<any>) {
    alert(this.components.length);
    // Create component dynamically inside the ng-template
    const component = this.container.createComponent(componentClass);
    // Push the component so that we can keep track of which components are created
    this.components.push(component);
  }

  removeComponent(componentClass: Type<any>) {
    // // Find the component
    // const component = this.components.find(
    //   (component) => component.instance instanceof componentClass
    // );
    // const componentIndex = this.components.indexOf(component);
    // if (componentIndex !== -1) {
    //   // Remove component from both view and array
    //   this.container.remove(this.container.indexOf(component));
    //   this.components.splice(componentIndex, 1);
    // }
  }
}
