import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckEnquiryComponent } from './check-enquiry.component';

describe('CheckEnquiryComponent', () => {
  let component: CheckEnquiryComponent;
  let fixture: ComponentFixture<CheckEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckEnquiryComponent]
    });
    fixture = TestBed.createComponent(CheckEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
