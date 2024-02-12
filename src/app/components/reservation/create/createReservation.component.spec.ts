import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationComponent } from './createReservation.component';

describe('CreateComponent', () => {
  let component: CreateReservationComponent;
  let fixture: ComponentFixture<CreateReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateReservationComponent]
    });
    fixture = TestBed.createComponent(CreateReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
