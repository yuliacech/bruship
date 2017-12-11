import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAccommodationListComponent } from './map-accommodation-list.component';

describe('MapAccommodationListComponent', () => {
  let component: MapAccommodationListComponent;
  let fixture: ComponentFixture<MapAccommodationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAccommodationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAccommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
