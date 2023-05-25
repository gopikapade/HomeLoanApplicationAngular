import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSanctionLetterComponent } from './application-sanction-letter.component';

describe('ApplicationSanctionLetterComponent', () => {
  let component: ApplicationSanctionLetterComponent;
  let fixture: ComponentFixture<ApplicationSanctionLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationSanctionLetterComponent]
    });
    fixture = TestBed.createComponent(ApplicationSanctionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
