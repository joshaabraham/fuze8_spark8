import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContColMiddleComponent } from './cont-col-middle.component';

describe('ContColMiddleComponent', () => {
  let component: ContColMiddleComponent;
  let fixture: ComponentFixture<ContColMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContColMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContColMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
