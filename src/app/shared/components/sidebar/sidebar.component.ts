import { Component, OnInit } from '@angular/core';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },

  { path:"/flightlist", title: 'flights'  ,  icon:'flight', class: ''      },
  /* { path: '/table-list', title: 'passengers',  icon:'content_paste', class: '' }, */
  { path:"/schedules",  title: 'schedules'  ,  icon:'timer', class: ''        },
  { path:"/Cancellations",  title: 'cancellations'  ,  icon:'timer', class: ''        },
  { path:"/cancelrequest",  title: 'Cancelrequest'  ,  icon:'timer', class: ''        },

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
