import { Schedule } from "./schedule";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Airlines } from "./airlines";

@Injectable({
  providedIn: "root",
})
export class ScheduleService {
  schedule: Schedule[];
  constructor(private httpClient: HttpClient) {
  }
  getSchedules() : Observable<Schedule[]>   {
    return this.httpClient
      .get<Schedule[]>('http://localhost:8097/schedule/')
      .pipe(catchError(this.errorHandler));
  }
  addSchedule(newData) {
    this.schedule.push(newData);
  }
  delete(i: number) {
    this.schedule.splice(i, 1);
  }
  edit(i: number, newUser) {
    this.schedule.splice(i, 0, newUser);
  }
  errorHandler(eror: HttpErrorResponse) {
    return throwError(eror);
  }
}

