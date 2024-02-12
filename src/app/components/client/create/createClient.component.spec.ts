import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClientComponent } from './createClient.component';

describe('CreateComponent', () => {
  let component: CreateClientComponent;
  let fixture: ComponentFixture<CreateClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateClientComponent]
    });
    fixture = TestBed.createComponent(CreateClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
