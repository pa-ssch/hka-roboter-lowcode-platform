import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartupDialogComponent } from './startup-dialog.component';

describe('StartupDialogComponent', () => {
  let component: StartupDialogComponent;
  let fixture: ComponentFixture<StartupDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartupDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
