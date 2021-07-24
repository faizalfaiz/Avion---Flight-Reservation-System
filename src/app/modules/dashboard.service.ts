import { FlightRouteService } from './../flight-route.service';
import { Injectable } from '@angular/core';
import { FlightRoute } from '../FlightRoute';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  flightRoutes: FlightRoute[];
  constructor(flightRouteService: FlightRouteService) { }

  bigChart() {
    return [{
      name: 'Test Airline',
      data: [ 5, 5, 5, 5, 5, 5]
    },{
      name: 'AirAsia',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Indigo',
      data: [308, 207, 404, 133, 441, 321, 66]
    }, {
      name: 'AirIndia',
      data: [163, 2203, 276, 4028, 547, 7229, 628]
    }, {
      name: 'BritishAirways',
      data: [128, 2231, 54, 156, 1339, 818, 1201]
    }, {
      name: 'VistaraAirways',
      data: [112, 212, 22, 622, 13, 2230, 461]
    }];
  }



}
