import { Router } from '@angular/router';
import { ScheduleComponent } from './../schedule/schedule.component';
import * as moment from 'moment';
import { ScheduleService } from "./../../schedule.service";
import { Component, OnInit } from "@angular/core";
import { Schedule } from "../../schedule";

@Component({
  selector: "app-addschedule",
  templateUrl: "./addschedule.component.html",
  styleUrls: ["./addschedule.component.css"],
})
export class AddscheduleComponent implements OnInit {
  schedule = new Schedule();
  minDate: any;
  constructor(
    private scheduleService: ScheduleService,
    private adminSchedule: ScheduleComponent,
    private router: Router
  ) {}

  ngOnInit() {
    this.minDate= moment(new Date()).format('YYYY-MM-DD');
  }
  addNew() {
    // this.scheduleService.addSchedule(this.schedule);
    // this.adminSchedule.showTable = !this.adminSchedule.showTable;
    // this.adminSchedule.showAddButton =! this.adminSchedule.showAddButton;
    // this.adminSchedule.showForm = !this.adminSchedule.showForm;
    this.router.navigate(['/schedules']);

  }
}
