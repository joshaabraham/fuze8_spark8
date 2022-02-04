import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContColLeftComponent } from './cont-col-left.component';

describe('ContColLeftComponent', () => {
  let component: ContColLeftComponent;
  let fixture: ComponentFixture<ContColLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContColLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContColLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
