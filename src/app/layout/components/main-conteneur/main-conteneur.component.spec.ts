import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainConteneurComponent } from './main-conteneur.component';

describe('MainConteneurComponent', () => {
  let component: MainConteneurComponent;
  let fixture: ComponentFixture<MainConteneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainConteneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
