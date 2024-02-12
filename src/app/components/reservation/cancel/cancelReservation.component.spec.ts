import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelReservationComponent } from './cancelReservation.component';

describe('CancelComponent', () => {
  let component: CancelReservationComponent;
  let fixture: ComponentFixture<CancelReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelReservationComponent]
    });
    fixture = TestBed.createComponent(CancelReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
