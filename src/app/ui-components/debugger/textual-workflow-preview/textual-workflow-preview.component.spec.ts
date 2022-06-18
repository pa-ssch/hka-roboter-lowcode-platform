import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualWorkflowPreviewComponent } from './textual-workflow-preview.component';

describe('TextualWorkflowPreviewComponent', () => {
  let component: TextualWorkflowPreviewComponent;
  let fixture: ComponentFixture<TextualWorkflowPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextualWorkflowPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextualWorkflowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
