import { Router } from '@angular/router';
import { ScheduleService } from "./../../schedule.service";
import { Component, OnInit } from "@angular/core";
import { Schedule } from "../../schedule";

@Component({
  selector: "app-schedule",
  templateUrl: "./schedule.component.html",
  styleUrls: ["./schedule.component.css"],
})
export class ScheduleComponent implements OnInit {
  schedule: Schedule[];
  schId: string;
  showForm = true;
  showEditForm = true;
  showViewForm = true;
  showButton = false;
  showAddButton = false;
  showTable = false;
  constructor(private scheduleService: ScheduleService) {}

  ngOnInit() {
    this.scheduleService.getSchedules().subscribe(s => this.schedule = s);
  }

  deleteSchedule(i: number) {
    this.scheduleService.delete(i);
  }
  addSchedule() {
    this.showForm = !this.showForm;
    this.showAddButton = !this.showAddButton;
    this.showTable = !this.showTable;
  }
  viewSchedule() {
    this.showViewForm = !this.showViewForm;
    this.showTable = !this.showTable;
    this.showAddButton = !this.showAddButton;
  }
  /* editSchedule(i: number) {
    this.scheduleService.delete(i);
    this.showButton = !this.showButton;
    this.showTable = !this.showTable;
    this.showEditForm = !this.showEditForm;
    this.showAddButton = !this.showAddButton;
  } */
}
