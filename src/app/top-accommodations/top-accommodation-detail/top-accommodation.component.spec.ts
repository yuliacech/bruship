import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAccommodationComponent } from './top-accommodation.component';

describe('TopAccommodationComponent', () => {
  let component: TopAccommodationComponent;
  let fixture: ComponentFixture<TopAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
