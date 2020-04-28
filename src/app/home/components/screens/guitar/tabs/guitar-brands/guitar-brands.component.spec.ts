import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitarBrandsComponent } from './guitar-brands.component';

describe('GuitarBrandsComponent', () => {
  let component: GuitarBrandsComponent;
  let fixture: ComponentFixture<GuitarBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuitarBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitarBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
