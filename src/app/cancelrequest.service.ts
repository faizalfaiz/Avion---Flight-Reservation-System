
import { CancelRequest } from './cancelrequest';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CancelrequestService {
  cancelrequestArray: CancelRequest[];

  constructor() {

    this.cancelrequestArray = [{
      ticketID: 'T090',
      email: "anita@gmail.com",
    },
    {
      ticketID: 'T091',
      email: "akash@gmail.com",
    },
    ];
  }

  getCancelrequest(): CancelRequest[] {
    return this.cancelrequestArray;
  }

  deleteRequest(ticketID: string): void {
    this.cancelrequestArray.forEach((req, index) => {
      if (req.ticketID === ticketID) this.cancelrequestArray.splice(index, 1);
    });
  }

  getcancelrequestRowCount(): number {
    return this.cancelrequestArray.length;
  }
}
