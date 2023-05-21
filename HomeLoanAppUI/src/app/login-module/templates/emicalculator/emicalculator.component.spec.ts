import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMIcalculatorComponent } from './emicalculator.component';

describe('EMIcalculatorComponent', () => {
  let component: EMIcalculatorComponent;
  let fixture: ComponentFixture<EMIcalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EMIcalculatorComponent]
    });
    fixture = TestBed.createComponent(EMIcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
