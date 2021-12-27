import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSearchBlockComponent } from './sport-search-block.component';

describe('SportSearchBlockComponent', () => {
  let component: SportSearchBlockComponent;
  let fixture: ComponentFixture<SportSearchBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportSearchBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportSearchBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
