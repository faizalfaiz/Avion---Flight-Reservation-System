import { Injectable } from '@angular/core';
import { Flight } from './flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights: Flight[];


  constructor() {
    this.flights = [
      {
        flightid: 'F476',
        flightname: 'SpiceJet',
        seatingCapacity: 150,
        bookingCapacity: 100,
      },
      {
        flightid: 'F456',
        flightname: 'AirAsia',
        seatingCapacity: 190,
        bookingCapacity: 200,
      },
      {
        flightid: 'F123',
        flightname: 'SpiceJet',
        seatingCapacity: 110,
        bookingCapacity: 130,
      },
    ];
  }

  addFlight(flights: Flight) : void {
    this.flights.push(flights);
  }

  delete(i: number): void {
    this.flights.splice(i, 1);
  }

  getFlightsList(): Flight[] {
    return this.flights;

   
    }
    getFlightRowCount(): number {
      return this.flights.length;
  }
}
