import { FlightService } from './../../flight.service';
import { CancelrequestService } from 'src/app/cancelrequest.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { PassengerService } from 'src/app/passenger.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  bigChart = [];
  cards = [];
  passengerrowCount = 0;
  cancelrequestrowCount = 0;
  flightrowrowCount = 0;
  
  constructor(private dashboardService: DashboardService, private passengerService: PassengerService, private cancelrequestService: CancelrequestService, private flightService: FlightService) { }
   ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.passengerrowCount = this.passengerService.getPassengerRowCount();
    this.cancelrequestrowCount = this.cancelrequestService.getcancelrequestRowCount();
    this.flightrowrowCount = this.flightService.getFlightRowCount();
  }

}
