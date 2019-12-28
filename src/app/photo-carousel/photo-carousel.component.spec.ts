import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarouselComponent } from './photo-carousel.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PhotoCarouselComponent', () => {
  let component: PhotoCarouselComponent;
  let fixture: ComponentFixture<PhotoCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCarouselComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
