import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementGetSomethingComponent } from './workflow-element-get-something.component';

describe('WorkflowElementGetSomethingComponent', () => {
  let component: WorkflowElementGetSomethingComponent;
  let fixture: ComponentFixture<WorkflowElementGetSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementGetSomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementGetSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
