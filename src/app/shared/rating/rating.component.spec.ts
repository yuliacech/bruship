import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RatingComponent} from './rating.component';
import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'app-host-component',
  template: '<app-rating [rating]="rating"></app-rating>'
})
class TestHostComponent {
  rating = 0;
  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;
}

describe('RatingComponent', () => {
  let testHostComponent: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestHostComponent, RatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(TestHostComponent).toBeTruthy();
  });

  it('should return all empty if rating is 0', () => {
    testHostComponent.rating = 0;
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star_border', 'star_border', 'star_border',
      'star_border', 'star_border']);
  });

  it('should return 1 full and others empty if rating is 1', () => {
    testHostComponent.rating = 1;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star_border', 'star_border',
      'star_border', 'star_border']);
  });

  it('should return all full if rating is 5', () => {
    testHostComponent.rating = 5;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star',
      'star', 'star']);
  });

  it('should return 2 full, 1 half and others empty if rating is 2.5', () => {
    testHostComponent.rating = 2.5;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star_half',
      'star_border', 'star_border']);
  });

  it('should return 2 full, and others empty if rating is 2.24', () => {
    testHostComponent.rating = 2.24;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star_border',
      'star_border', 'star_border']);
  });

  it('should return 2 full, 1 half and others empty if rating is 2.25', () => {
    testHostComponent.rating = 2.25;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star_half',
      'star_border', 'star_border']);
  });

  it('should return 2 full, 1 half and others empty if rating is 2.74', () => {
    testHostComponent.rating = 2.74;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star_half',
      'star_border', 'star_border']);
  });

  it('should return 3 full, and others empty if rating is 2.75', () => {
    testHostComponent.rating = 2.75;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star',
      'star_border', 'star_border']);
  });

  it('should return 3 full, and others empty if rating is 2.8', () => {
    testHostComponent.rating = 2.75;
    fixture.detectChanges();
    expect(testHostComponent.ratingComponent.starIcons).toEqual(['star', 'star', 'star',
      'star_border', 'star_border']);
  });
});


