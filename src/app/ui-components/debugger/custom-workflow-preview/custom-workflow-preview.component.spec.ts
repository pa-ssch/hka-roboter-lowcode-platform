import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWorkflowPreviewComponent } from './custom-workflow-preview.component';

describe('CustomWorkflowPreviewComponent', () => {
  let component: CustomWorkflowPreviewComponent;
  let fixture: ComponentFixture<CustomWorkflowPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomWorkflowPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWorkflowPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
