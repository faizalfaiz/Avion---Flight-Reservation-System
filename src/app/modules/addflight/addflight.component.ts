import { FlightService } from './../../flight.service';

import { Flight } from './../../flight';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddFlightComponent  {
  flight: Flight = new Flight();
  constructor(private flightService: FlightService , private router: Router) { }


  saveFlight() {
    console.log( JSON.stringify (this.flight));
    this.flightService.addFlight(this.flight);
    this.router.navigate(['/flightlist']);
  }


}
