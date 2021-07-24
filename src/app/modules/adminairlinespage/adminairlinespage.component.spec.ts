import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminairlinespageComponent } from './adminairlinespage.component';

describe('AdminairlinespageComponent', () => {
  let component: AdminairlinespageComponent;
  let fixture: ComponentFixture<AdminairlinespageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminairlinespageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminairlinespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
