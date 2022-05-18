import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementIfThenElseComponent } from './workflow-element-if-then-else.component';

describe('WorkflowElementIfThenElseComponent', () => {
  let component: WorkflowElementIfThenElseComponent;
  let fixture: ComponentFixture<WorkflowElementIfThenElseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementIfThenElseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementIfThenElseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
