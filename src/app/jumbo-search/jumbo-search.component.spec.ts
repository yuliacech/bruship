import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboSearchComponent } from './jumbo-search.component';

describe('JumboSearchComponent', () => {
  let component: JumboSearchComponent;
  let fixture: ComponentFixture<JumboSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
