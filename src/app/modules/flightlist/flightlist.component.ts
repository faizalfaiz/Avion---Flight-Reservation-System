import { Flight } from './../../flight';
import { Component, OnInit } from '@angular/core';
import { FlightService} from '../../flight.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-flightlist',
  templateUrl: './flightlist.component.html',
  styleUrls: ['./flightlist.component.css']
})
export class FlightlistComponent implements OnInit {

  flights: Flight[];

  constructor(private flightService: FlightService, private router: Router) {


   }

  ngOnInit() {
   this.flights = this.flightService.getFlightsList();
  }
  getFlight(): void{
    this.flights= [

     ];
   }

   trackByFlightid (index: number, flights: Flight){
     return flights.flightid;}

  deleteFlight(i: number) {
    this.flightService.delete(i);
  }
   getTotalFlightCount(): number {
    return this.flights.length;
}
 // editFlight() {
   // this.router.navigate(['EditFlight/' + this.flights.flightId]);
 // }
 addFlight() {
  console.log( JSON.stringify (this.flights));
  this.router.navigate(['addflight']);

}
}
