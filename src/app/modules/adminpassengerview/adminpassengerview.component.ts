import { PassengerService } from './../../passenger.service';
import { Component, OnInit } from '@angular/core';
import { Passenger } from '../../passenger';

@Component({
  selector: 'app-adminpassengerview',
  templateUrl: './adminpassengerview.component.html',
  styleUrls: ['./adminpassengerview.component.css']
})
export class AdminpassengerviewComponent implements OnInit {
  passenger: Passenger[];
  constructor(private passengerService: PassengerService) { }

  ngOnInit() {
  this.passenger = this.passengerService.getPassengers();
  }

}
