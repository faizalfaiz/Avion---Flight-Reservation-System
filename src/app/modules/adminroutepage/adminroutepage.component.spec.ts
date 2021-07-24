import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroutepageComponent } from './adminroutepage.component';

describe('AdminroutepageComponent', () => {
  let component: AdminroutepageComponent;
  let fixture: ComponentFixture<AdminroutepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminroutepageComponent ],
      imports:[FormsModule, RouterTestingModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminroutepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
