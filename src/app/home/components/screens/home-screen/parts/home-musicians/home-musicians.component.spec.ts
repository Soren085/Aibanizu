import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMusiciansComponent } from './home-musicians.component';

describe('HomeMusiciansComponent', () => {
  let component: HomeMusiciansComponent;
  let fixture: ComponentFixture<HomeMusiciansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMusiciansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMusiciansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
