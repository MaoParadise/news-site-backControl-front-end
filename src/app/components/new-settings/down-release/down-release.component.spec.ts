import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownReleaseComponent } from './down-release.component';

describe('DownReleaseComponent', () => {
  let component: DownReleaseComponent;
  let fixture: ComponentFixture<DownReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
