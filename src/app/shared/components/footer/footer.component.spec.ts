import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports:[FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
