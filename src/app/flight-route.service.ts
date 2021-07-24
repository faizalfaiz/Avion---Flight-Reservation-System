import { Injectable } from "@angular/core";
import { Route } from '@angular/compiler/src/core';
import { FlightRoute } from "./FlightRoute";
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FlightRouteService {
  flightRoutes: FlightRoute[];
  headers = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private httpClient: HttpClient) {
  }

  getFlightRoutes(): Observable<FlightRoute[]> {
    // return this.flightRoutes;
    return this.httpClient
      .get<FlightRoute[]>("http://localhost:8097/route/")
      .pipe(catchError(this.errorHandler));
  }

  addFlightRoute(newFlightRoute) {

    return this.httpClient
    .post<FlightRoute>(
      "http://localhost:8097/route/add",
      JSON.stringify(newFlightRoute),
      this.headers
    )
    .pipe(catchError(this.errorHandler));
}

  deleteFlightRoute(routeid: number) {
    return this.httpClient
    .delete<FlightRoute>(`http://localhost:8097/route/${routeid}`)
    .pipe(catchError(this.errorHandler));
}


  updateFlightRoute(updatedData) {
    /*this.flightRoutes = this.flightRoutes.filter((value, key) => {
      if (value.routeId === updatedData.routeid) {
        value.source = updatedData.source;
        value.destination = updatedData.destination;
        value.scheduleId = updatedData.scheduleid;
      }
      return true;
    })*/

    return this.httpClient
      .put<FlightRoute>(
        'http://localhost:8097/route/edit',
        JSON.stringify(updatedData),
        this.headers
      )
      .pipe(catchError(this.errorHandler));

  }
  errorHandler(eror: HttpErrorResponse) {
    return throwError(eror);
  }
}


