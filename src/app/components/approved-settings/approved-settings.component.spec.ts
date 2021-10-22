import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovedSettingsComponent } from './approved-settings.component';

describe('ApprovedSettingsComponent', () => {
  let component: ApprovedSettingsComponent;
  let fixture: ComponentFixture<ApprovedSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovedSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovedSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
