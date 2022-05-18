import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementTriggerComponent } from './workflow-element-trigger.component';

describe('WorkflowElementTriggerComponent', () => {
  let component: WorkflowElementTriggerComponent;
  let fixture: ComponentFixture<WorkflowElementTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
