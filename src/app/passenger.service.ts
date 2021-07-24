import { Injectable } from '@angular/core';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  passengersArray: Passenger[];
  constructor() {
    this.passengersArray = [{
      name: 'Anita',
      seatno: 20,
      age: 21,
      gender: 'Female',
      ticketID: 'T090',
    },
    {
      name: 'Akash',
      seatno: 10,
      age: 21,
      gender: 'Male',
      ticketID: 'T091',
    }];
  }

  getSeatno(i: number, n: number) {
    this.passengersArray[i].seatno = n;
  }

  getTicketID(i: number, n: string) {
    this.passengersArray[i].ticketID = n;
  }

  getPassenger() {
    console.log(this.passengersArray);
    //console.log(this.pass.length);
  }

  getPassengers(): Passenger[] {
    return this.passengersArray;
  }

  /* AddPassenger(passe: Passenger[], len: number) {
    for (let i = 0; i < len; i++) {
      this.passengersArray.push(passe[i]);
    }
    console.log(this.passengersArray);
  } */

  deletePassenger(ticketID: string): void {
    this.passengersArray.forEach((row, index) => {
      if (row.ticketID === ticketID) this.passengersArray.splice(index, 1);
    });
  }

  getPassengerRowCount(): number {
    return this.passengersArray.length;
  }
}

