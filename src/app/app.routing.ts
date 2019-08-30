import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppointmentschedulerComponent } from './appointmentscheduler/appointmentscheduler.component';
import { AppointmentsdashboardComponent } from './appointmentsdashboard/appointmentsdashboard.component';
import { MycasesComponent } from './mycases/mycases.component';

const arr: Routes = [
  {path: '', component: AppointmentschedulerComponent},
  {path: 'dashboard', component: AppointmentsdashboardComponent},
  {path: 'cases', component: MycasesComponent}
];
export const routing = RouterModule.forRoot(arr);
