import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementWhileLoopComponent } from './workflow-element-while-loop.component';

describe('WorkflowElementWhileLoopComponent', () => {
  let component: WorkflowElementWhileLoopComponent;
  let fixture: ComponentFixture<WorkflowElementWhileLoopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementWhileLoopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementWhileLoopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
