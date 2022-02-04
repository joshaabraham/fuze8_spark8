import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainImageCommentBlockComponent } from './main-image-comment-block.component';

describe('MainImageCommentBlockComponent', () => {
  let component: MainImageCommentBlockComponent;
  let fixture: ComponentFixture<MainImageCommentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainImageCommentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainImageCommentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
