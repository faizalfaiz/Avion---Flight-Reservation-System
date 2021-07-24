import { AppRoutingModule } from './../../app-routing.module';
import { AirlinesService } from './../../airlines.service';
import { FlightRouteService } from './../../flight-route.service';
import { AddscheduleComponent } from './../../modules/addschedule/addschedule.component';
import { RouteDialogBoxComponent } from './../../modules/routedialogbox/routedialogbox.component';
import { ScheduleService } from './../../schedule.service';
import { PassengerService } from './../../passenger.service';
import { FlightService } from './../../flight.service';
import { AddFlightComponent } from './../../modules/addflight/addflight.component';
import { FlightlistComponent } from 'src/app/modules/flightlist/flightlist.component';
import { AdminroutepageComponent } from 'src/app/modules/adminroutepage/adminroutepage.component';
import { AdminpassengerviewComponent } from 'src/app/modules/adminpassengerview/adminpassengerview.component';
import { CancellationComponent } from 'src/app/modules/cancellation/cancellation.component';
import { ScheduleComponent } from 'src/app/modules/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule, MatDividerModule, MatCardModule, MatPaginatorModule, MatTableModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSortModule, MatSelectModule,  } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardService } from 'src/app/modules/dashboard.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CancelrequestService } from 'src/app/cancelrequest.service';
import { AdminairlinespageComponent } from 'src/app/modules/adminairlinespage/adminairlinespage.component';
import { AddairlinesComponent } from 'src/app/modules/addairlines/addairlines.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    AddscheduleComponent,
    AdminpassengerviewComponent,
    AdminroutepageComponent,
    FlightlistComponent,
    ScheduleComponent,
   AddFlightComponent,
    CancellationComponent,
    RouteDialogBoxComponent,
    AdminairlinespageComponent,

    AddairlinesComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSortModule,
    MatSelectModule,
    RouterModule,
    AppRoutingModule

  ],

    entryComponents: [
      RouteDialogBoxComponent
    ],


  providers: [
    DashboardService,FlightService,PassengerService, CancelrequestService, ScheduleService, FlightRouteService, AirlinesService
  ]
})
export class DefaultModule { }
