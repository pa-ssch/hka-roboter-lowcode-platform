import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AdapterDefinitionModule {}

export interface IRoboterAdapter {
  getName(): string;
}
