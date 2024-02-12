import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyApartmentComponent } from './modifyApartment.component';

describe('ModifyComponent', () => {
  let component: ModifyApartmentComponent;
  let fixture: ComponentFixture<ModifyApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyApartmentComponent]
    });
    fixture = TestBed.createComponent(ModifyApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
