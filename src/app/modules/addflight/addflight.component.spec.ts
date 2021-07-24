import { FlightlistComponent } from 'src/app/modules/flightlist/flightlist.component';
import { FlightService } from './../../flight.service';
import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AddFlightComponent } from './addflight.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddFlightComponent', () => {
  let component: AddFlightComponent;
  let fixture: ComponentFixture<AddFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFlightComponent ],
      imports:[ FormsModule, RouterTestingModule ],
      providers: [FlightService, FlightlistComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should add flights', () =>{
    expect(component.saveFlight).toBeTruthy();
  });


  it('should form be invalid when empty', () =>{
   expect(component.flight.flightid).toBeFalsy();
   expect(component.flight.flightname).toBeFalsy();
   expect(component.flight.seatingCapacity).toBeFalsy();
   expect(component.flight.bookingCapacity).toBeFalsy();

  });

  it('should call save when button clicked', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, "navigate");
    component.saveFlight();
    expect(spy).toBeTruthy(["/flightlist"]);
  });

});