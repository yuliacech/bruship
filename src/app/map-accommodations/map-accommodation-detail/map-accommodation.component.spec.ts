import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAccommodationComponent } from './map-accommodation.component';

describe('MapAccommodationComponent', () => {
  let component: MapAccommodationComponent;
  let fixture: ComponentFixture<MapAccommodationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAccommodationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
