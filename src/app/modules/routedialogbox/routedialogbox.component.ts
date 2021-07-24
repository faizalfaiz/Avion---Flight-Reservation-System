import { FlightRoute } from './../../FlightRoute';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { errorMessages, regExps } from './route-validators';
import { Schedule } from 'src/app/schedule';
import { ScheduleService } from 'src/app/schedule.service';


export interface UsersData {
  name: string;
  id: number;
}


@Component({
  selector: 'app-routedialogbox',
  templateUrl: './routedialogbox.component.html',
  styleUrls: ['./routedialogbox.component.css']
})
export class RouteDialogBoxComponent implements OnInit{
  [x: string]: any;
  flightRoute = new FlightRoute();
  schedule: Schedule[];
  scheduleId: String
  action: string;
  localData: any;
  routeForm: FormGroup;
  errors = errorMessages;


  constructor(
    public dialogRef: MatDialogRef<RouteDialogBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data ,
    private formBuilder: FormBuilder, private scheduleService: ScheduleService) {
    this.localData = { ...data };
    this.action = this.localData.action;
    this.createForm();
    this.routeForm.patchValue(this.localData);
  }
  ngOnInit() {
    this.scheduleService.getSchedules().subscribe(s => this.schedule = s);
    }



  createForm() {
    this.routeForm = this.formBuilder.group({
      routeId: ['', [Validators.required, Validators.pattern(regExps.routeid)]],
      source: ['', [Validators.required, Validators.pattern(regExps.source)]],
      destination: ['', [Validators.required, Validators.pattern(regExps.destination)]],
      scheduleId: ['', [Validators.required, Validators.pattern(regExps.scheuldeid)]]
    });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit(): void {
    this.dialogRef.close({ event: this.action, data: this.routeForm.value });
  }
}

