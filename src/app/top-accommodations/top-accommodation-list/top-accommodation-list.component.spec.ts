import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAccommodationListComponent } from './top-accommodation-list.component';

describe('TopAccommodationListComponent', () => {
  let component: TopAccommodationListComponent;
  let fixture: ComponentFixture<TopAccommodationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAccommodationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAccommodationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
