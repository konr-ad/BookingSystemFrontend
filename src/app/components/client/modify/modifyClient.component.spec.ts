import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyClientComponent } from './modifyClient.component';

describe('ModifyComponent', () => {
  let component: ModifyClientComponent;
  let fixture: ComponentFixture<ModifyClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyClientComponent]
    });
    fixture = TestBed.createComponent(ModifyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
