import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentschedulerComponent } from './appointmentscheduler.component';

describe('AppointmentschedulerComponent', () => {
  let component: AppointmentschedulerComponent;
  let fixture: ComponentFixture<AppointmentschedulerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentschedulerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentschedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
