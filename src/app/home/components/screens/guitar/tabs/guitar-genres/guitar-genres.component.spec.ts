import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarGenresComponent } from './guitar-genres.component';

describe('GuitarGenresComponent', () => {
  let component: GuitarGenresComponent;
  let fixture: ComponentFixture<GuitarGenresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarGenresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
