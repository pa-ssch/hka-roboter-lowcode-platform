import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualWorkflowPreviewComponent } from './visual-workflow-preview.component';

describe('VisualWorkflowPreviewComponent', () => {
  let component: VisualWorkflowPreviewComponent;
  let fixture: ComponentFixture<VisualWorkflowPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualWorkflowPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualWorkflowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
