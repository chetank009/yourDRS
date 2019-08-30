import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsdashboardComponent } from './appointmentsdashboard.component';

describe('AppointmentsdashboardComponent', () => {
  let component: AppointmentsdashboardComponent;
  let fixture: ComponentFixture<AppointmentsdashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsdashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
