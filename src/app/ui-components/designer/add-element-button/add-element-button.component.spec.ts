import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementButtonComponent } from './add-element-button.component';

describe('AddElementButtonComponent', () => {
  let component: AddElementButtonComponent;
  let fixture: ComponentFixture<AddElementButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddElementButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
