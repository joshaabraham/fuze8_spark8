import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSectionBlockComponent } from './comment-section-block.component';

describe('CommentSectionBlockComponent', () => {
  let component: CommentSectionBlockComponent;
  let fixture: ComponentFixture<CommentSectionBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSectionBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSectionBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
