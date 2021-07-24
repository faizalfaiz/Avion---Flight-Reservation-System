import { ScheduleService } from './../../schedule.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleComponent } from './schedule.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ScheduleComponent', () => {
  let component: ScheduleComponent;
  let fixture: ComponentFixture<ScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleComponent ],
      imports:[FormsModule],
      providers: [ScheduleService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should delete schedules', () => {
    expect(component.deleteSchedule).toBeTruthy();
  });
  it('should render add schedules', () => {
    expect(component.addSchedule).toBeTruthy();
  });

});
