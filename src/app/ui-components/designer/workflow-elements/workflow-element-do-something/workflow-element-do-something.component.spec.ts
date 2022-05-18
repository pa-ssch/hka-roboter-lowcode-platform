import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowElementDoSomethingComponent } from './workflow-element-do-something.component';

describe('WorkflowElementDoSomethingComponent', () => {
  let component: WorkflowElementDoSomethingComponent;
  let fixture: ComponentFixture<WorkflowElementDoSomethingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkflowElementDoSomethingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowElementDoSomethingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
