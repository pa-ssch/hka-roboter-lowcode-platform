import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRobotAdapter } from '../adapter-definition/adapter-definition.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class VectorAdapterModule {
  public static getAdapter(): IRobotAdapter {
    return {
      name: 'Vector',
      parameter: [
        { name: 'Adresse des Roboters', valueType: 'string' },
        { name: 'Entwicklermodus', valueType: 'boolean' },
      ],
      validateParameter: (parameterValues) => {
        if (parameterValues[0] == 'localhost:1234') return '';
        else return 'Der Roboter ist nicht erreichbar';
      },
    };
  }
}
