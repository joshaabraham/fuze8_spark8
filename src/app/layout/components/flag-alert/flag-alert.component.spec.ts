import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlagAlertComponent } from './flag-alert.component';

describe('FlagAlertComponent', () => {
  let component: FlagAlertComponent;
  let fixture: ComponentFixture<FlagAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlagAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlagAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
