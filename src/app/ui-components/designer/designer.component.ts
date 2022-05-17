import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AddElementButtonComponent } from './add-element-button/add-element-button.component';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.sass'],
})
export class DesignerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('container', { read: ViewContainerRef })
  container: ViewContainerRef;
  components: any = [];

  ngAfterViewInit(): void {
    let component = this.addNewElementButton();
    component.position = 'absolute';
    component.left = '100px';
    component.top = '100px';
    this.components.at(-1).changeDetectorRef.detectChanges();
  }

  addNewElementButton(): AddElementButtonComponent {
    const component = this.container.createComponent(AddElementButtonComponent);
    component.changeDetectorRef.detectChanges();
    this.components.push(component);
    return component.instance;
  }

  ngOnDestroy(): void {
    if (this.components) {
      for (let component of this.components) {
        component.changeDetectorRef.detach();
      }
    }
  }
  // removeComponent(componentClass: Type<any>) {
  //   const component = this.components.find(
  //     (co: any) => co.instance instanceof componentClass
  //   );
  //   const componentIndex = this.components.indexOf(component);
  //   if (componentIndex !== -1) {
  //     let view = (component as ComponentRef<AddElementButtonComponent>)
  //       .hostView;
  //     this.container.remove(this.container.indexOf(view));
  //     this.components.splice(componentIndex, 1);
  //   }
  // }
}
