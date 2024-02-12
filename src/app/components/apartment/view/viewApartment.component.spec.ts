import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewApartmentComponent } from './viewApartment.component';

describe('ViewComponent', () => {
  let component: ViewApartmentComponent;
  let fixture: ComponentFixture<ViewApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewApartmentComponent]
    });
    fixture = TestBed.createComponent(ViewApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
