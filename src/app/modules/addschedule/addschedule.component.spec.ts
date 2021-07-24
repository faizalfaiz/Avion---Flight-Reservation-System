import { ScheduleService } from './../../schedule.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddscheduleComponent } from './addschedule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ScheduleComponent } from '../schedule/schedule.component';

describe('AddscheduleComponent', () => {
  let component: AddscheduleComponent;
  let fixture: ComponentFixture<AddscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddscheduleComponent ],
      imports:[FormsModule, RouterTestingModule, ReactiveFormsModule],
      providers: [ScheduleService, ScheduleComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
it('should add schedules', () =>{
  expect(component.addNew).toBeTruthy();
});
it('should form be invalid when empty', () =>{
 expect(component.schedule.schId).toBeFalsy();
 expect(component.schedule.fId).toBeFalsy();
 expect(component.schedule.depDate).toBeFalsy();
 expect(component.schedule.depTime).toBeFalsy();
 expect(component.schedule.arrDate).toBeFalsy();
 expect(component.schedule.arrTime).toBeFalsy();

});

});
