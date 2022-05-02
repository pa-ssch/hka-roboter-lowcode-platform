import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IRoboterAdapter as IRobotAdapter } from 'src/app/roboter-adapter/adapter-definition/adapter-definition.module';
import { VectorAdapterModule } from 'src/app/roboter-adapter/vector-adapter/vector-adapter.module';
import { VirtualDemoAdapterModule } from 'src/app/roboter-adapter/virtual-demo-adapter/virtual-demo-adapter.module';

@Component({
  selector: 'app-startup-dialog',
  templateUrl: './startup-dialog.component.html',
  styleUrls: ['./startup-dialog.component.sass'],
})
export class StartupDialogComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  robots: IRobotAdapter[] = [
    VectorAdapterModule.GetAdapter(),
    VirtualDemoAdapterModule.GetAdapter(),
  ];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }
}
