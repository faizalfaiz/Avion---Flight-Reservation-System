import { Airlines } from 'src/app/airlines';
import { Injectable } from '@angular/core';

import {
  HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";

import { Observable, throwError } from "rxjs";

import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  airlines: Airlines[];

  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {

  }

  addAirlines(airlines: Airlines)  {
    return this.httpClient
      .post<Airlines>(
        "http://localhost:8097/airline/add",
        JSON.stringify(airlines),
        this.headers
      )
      .pipe(catchError(this.errorHandler));
  }

  delete(airlineId: Airlines) {
    return this.httpClient
      .delete<Airlines>(`http://localhost:8097/airline/del/${airlineId}`)
      .pipe(catchError(this.errorHandler));
  }

  getAirlinesList(): Observable<Airlines[]>  {
    return this.httpClient
      .get<Airlines[]>("http://localhost:8097/airline/")
      .pipe(catchError(this.errorHandler));


    }
    getAirlinesRowCount(): number {
      return this.airlines.length;
  }

  errorHandler(eror: HttpErrorResponse) {
    return throwError(eror);
  }
}
