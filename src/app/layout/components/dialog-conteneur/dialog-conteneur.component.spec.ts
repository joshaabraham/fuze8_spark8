import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConteneurComponent } from './dialog-conteneur.component';

describe('DialogConteneurComponent', () => {
  let component: DialogConteneurComponent;
  let fixture: ComponentFixture<DialogConteneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConteneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
