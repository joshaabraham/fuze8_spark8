import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColMainContentComponent } from './three-col-main-content.component';

describe('ThreeColMainContentComponent', () => {
  let component: ThreeColMainContentComponent;
  let fixture: ComponentFixture<ThreeColMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
