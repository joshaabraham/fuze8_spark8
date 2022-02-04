import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCommentBlockComponent } from './header-comment-block.component';

describe('HeaderCommentBlockComponent', () => {
  let component: HeaderCommentBlockComponent;
  let fixture: ComponentFixture<HeaderCommentBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderCommentBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCommentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
