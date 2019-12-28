import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterComponent } from './newsletter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsletterService} from '@app/home/newsletter/newsletter.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ NewsletterComponent ],
      providers: [ {
        provide: NewsletterService,
        useValue: jasmine.createSpy()
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
