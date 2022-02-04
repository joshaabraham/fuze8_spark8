import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContColRightComponent } from './cont-col-right.component';

describe('ContColRightComponent', () => {
  let component: ContColRightComponent;
  let fixture: ComponentFixture<ContColRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContColRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContColRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
