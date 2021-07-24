import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpassengerviewComponent } from './adminpassengerview.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AdminpassengerviewComponent', () => {
  let component: AdminpassengerviewComponent;
  let fixture: ComponentFixture<AdminpassengerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminpassengerviewComponent ],
      imports:[FormsModule, ReactiveFormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpassengerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
