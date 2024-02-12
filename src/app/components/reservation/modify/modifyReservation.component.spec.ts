import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyReservationComponent } from './modifyReservation.component';

describe('ModifyComponent', () => {
  let component: ModifyReservationComponent;
  let fixture: ComponentFixture<ModifyReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyReservationComponent]
    });
    fixture = TestBed.createComponent(ModifyReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
