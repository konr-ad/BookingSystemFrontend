import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateApartmentComponent } from './createApartment.component';

describe('CreateComponent', () => {
  let component: CreateApartmentComponent;
  let fixture: ComponentFixture<CreateApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateApartmentComponent]
    });
    fixture = TestBed.createComponent(CreateApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
