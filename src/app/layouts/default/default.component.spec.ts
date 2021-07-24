import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultComponent } from './default.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultComponent ],
      imports:[FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
