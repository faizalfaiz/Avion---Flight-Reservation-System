import { CancelRequest } from './../../cancelrequest';
import { CancelrequestService } from './../../cancelrequest.service';
import { Component, OnInit } from '@angular/core';
import { PassengerService } from 'src/app/passenger.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  cancelrequest: CancelRequest[];
  selectedcancelrequestCountRadioButton = "All";
  constructor(
    private cancelrequestService: CancelrequestService,
    private passengerService: PassengerService) { }

  ngOnInit() {
     this.cancelrequest = this.cancelrequestService.getCancelrequest();
  }


  trackByTicketid(index: number, cancelrequest: CancelRequest) {
    return cancelrequest.ticketID;
  }


  getTotalCancelrequestCount(): number {
    return this.cancelrequest.length;
  }


  ApproveRe(ticketID: string): void {
    this.cancelrequestService.deleteRequest(ticketID); // delete's the CancelRequest
    this.passengerService.deletePassenger(ticketID); // delete's the Passenger
  }
 
}
