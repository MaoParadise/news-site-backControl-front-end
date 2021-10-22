import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSettingsComponent } from './new-settings.component';

describe('NewSettingsComponent', () => {
  let component: NewSettingsComponent;
  let fixture: ComponentFixture<NewSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
