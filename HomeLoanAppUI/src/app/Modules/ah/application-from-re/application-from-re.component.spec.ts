import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFromReComponent } from './application-from-re.component';

describe('ApplicationFromReComponent', () => {
  let component: ApplicationFromReComponent;
  let fixture: ComponentFixture<ApplicationFromReComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationFromReComponent]
    });
    fixture = TestBed.createComponent(ApplicationFromReComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
