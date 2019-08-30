import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, MatIconModule, MatCheckboxModule } from '@angular/material';
import { AppointmentsdashboardComponent } from './appointmentsdashboard/appointmentsdashboard.component';
import { AppointmentschedulerComponent } from './appointmentscheduler/appointmentscheduler.component';
import { MycasesComponent } from './mycases/mycases.component';
import { routing } from './app.routing';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MenuNavComponent,
    AppointmentsdashboardComponent,
    AppointmentschedulerComponent,
    MycasesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, MatToolbarModule, routing,
    MatTabsModule, MatMenuModule,MatIconModule,
    MatSelectModule,NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatCheckboxModule,
    MatAutocompleteModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
