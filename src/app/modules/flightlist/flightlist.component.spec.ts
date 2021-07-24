import { FlightService } from './../../flight.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FlightlistComponent } from './flightlist.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('FlightlistComponent', () => {
  let component: FlightlistComponent;
  let fixture: ComponentFixture<FlightlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightlistComponent ],
      imports:[FormsModule, ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ FlightService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should delete flight details', () => {
    expect(component.deleteFlight).toBeTruthy();
  });

  it('should render add flights', () => {
    expect(component.addFlight).toBeTruthy();
  });

  it('should call add flight page when button clicked', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, "navigate");
    component.addFlight();
    expect(spy).toBeTruthy(["/addflight"]);
  });


});