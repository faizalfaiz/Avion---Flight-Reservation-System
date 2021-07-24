import { AdminairlinespageComponent } from 'src/app/modules/adminairlinespage/adminairlinespage.component';
import { AdminpassengerviewComponent } from'src/app/modules/adminpassengerview/adminpassengerview.component';
import { AdminroutepageComponent } from 'src/app/modules/adminroutepage/adminroutepage.component';
import { AddscheduleComponent } from './modules/addschedule/addschedule.component';
import { FlightlistComponent } from './modules/flightlist/flightlist.component';
import { CancellationComponent } from './modules/cancellation/cancellation.component';
import { ScheduleComponent } from './modules/schedule/schedule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AddFlightComponent } from './modules/addflight/addflight.component';
import { AddairlinesComponent } from './modules/addairlines/addairlines.component';


const routes: Routes = [{

    path:'',
    redirectTo:'intro',
    pathMatch:'full',
  },

  {
    path: 'signout',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {

  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  },
  {
    path: 'schedules',
    component: ScheduleComponent
  },   {
    path: 'cancellations',
    component: CancellationComponent
  },  {
    path: 'flightlist',
    component: FlightlistComponent
  },  {
    path: 'addflight',
    component: AddFlightComponent
  },  {
    path: 'addschedule',
    component: AddscheduleComponent
  },
  { path:"adminroute",
  component: AdminroutepageComponent
},

{ path:"adminpassengerview",
component: AdminpassengerviewComponent},


{ path:"adminairlinespage",
component: AdminairlinespageComponent}
,


{ path:"addairlines",
component: AddairlinesComponent}
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
