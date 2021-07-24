import { Component, OnInit } from '@angular/core';
import { AddairlinesComponent } from 'src/app/modules/addairlines/addairlines.component';
import { AddFlightComponent } from 'src/app/modules/addflight/addflight.component';
import { AddscheduleComponent } from 'src/app/modules/addschedule/addschedule.component';
import { AdminairlinespageComponent } from 'src/app/modules/adminairlinespage/adminairlinespage.component';
import { AdminpassengerviewComponent } from 'src/app/modules/adminpassengerview/adminpassengerview.component';
import { AdminroutepageComponent } from 'src/app/modules/adminroutepage/adminroutepage.component';
import { CancellationComponent } from 'src/app/modules/cancellation/cancellation.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { FlightlistComponent } from 'src/app/modules/flightlist/flightlist.component';
import { ScheduleComponent } from 'src/app/modules/schedule/schedule.component';
// declare interface RouteInfo {
//   path: string;
//   title: string;

// }
// export const ROUTES: RouteInfo[] = [
//   {

//     path: '',
//     component: DefaultComponent,
//    },{
//       path: '',
//       component: DashboardComponent
//     },
//     {
//       path: 'schedules',
//       component: ScheduleComponent
//     },   {
//       path: 'cancellations',
//       component: CancellationComponent
//     },  {
//       path: 'flightlist',
//       component: FlightlistComponent
//     },  {
//       path: 'addflight',
//       component: AddFlightComponent
//     },  {
//       path: 'addschedule',
//       component: AddscheduleComponent
//     },
//     { path:"adminroute",
//     component: AdminroutepageComponent
//   },

//   { path:"adminpassengerview",
//   component: AdminpassengerviewComponent},


//   { path:"adminairlinespage",
//   component: AdminairlinespageComponent}
//   ,


//   { path:"addairlines",
//   component: AddairlinesComponent}
//   ]
//   ;


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() { }



}
