import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementLogicComponent } from './workflow-element-logic.component';

describe('WorkflowElementLogicComponent', () => {
  let component: WorkflowElementLogicComponent;
  let fixture: ComponentFixture<WorkflowElementLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
