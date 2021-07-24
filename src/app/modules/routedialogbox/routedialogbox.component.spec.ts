
import { MatDialogModule, MatFormFieldModule, MatButtonModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouteDialogBoxComponent } from './routedialogbox.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('RouteDialogBoxComponent', () => {
  let component: RouteDialogBoxComponent;
  let fixture: ComponentFixture<RouteDialogBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteDialogBoxComponent],
      imports: [ FormsModule, RouterTestingModule, MatDialogModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
});