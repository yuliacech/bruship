import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MapDetailComponent} from './map-detail.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('MapDetailComponent', () => {
  let component: MapDetailComponent;
  let fixture: ComponentFixture<MapDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapDetailComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
