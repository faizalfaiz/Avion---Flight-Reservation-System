import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationComponent } from './cancellation.component';

describe('CancellationComponent', () => {
  let component: CancellationComponent;
  let fixture: ComponentFixture<CancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
  it('should list the cancelrequest', () => {
    component.ngOnInit();
    expect(component.cancelrequest.length).toBeGreaterThan(0);
  });

  it('should not list the cancelrequest', () => {
    component.ngOnInit();
    expect(component.cancelrequest.length).not.toBeLessThan(0);
  });
  
});
