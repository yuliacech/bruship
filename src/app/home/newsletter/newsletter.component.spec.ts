import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NewsletterComponent} from './newsletter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NewsletterService} from '@app/home/newsletter/newsletter.service';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {of} from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
describe('NewsletterComponent', () => {
  let component: NewsletterComponent;
  let fixture: ComponentFixture<NewsletterComponent>;

  const newsletterService = jasmine.createSpyObj(['addSubscriber']);
  newsletterService.addSubscriber.and.callFake(() => of('test'));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NewsletterComponent],
      providers: [{
        provide: NewsletterService,
        useValue: newsletterService
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

  it('button should be disabled by default (email is empty)', () => {
    expect(component.email.value).toBe('');
    expect(component.email.errors).toBeTruthy();
    expect(component.disableButton).toBe(false);
    const newsletterElement: HTMLElement = fixture.nativeElement;
    const button = newsletterElement.querySelector('button');
    expect(button.disabled).toBe(true);
  });

  it('button should be disabled and an error message should be shown if email is not correct', () => {

    const newsletterElement: HTMLElement = fixture.nativeElement;
    const input = newsletterElement.querySelector('input');
    input.value = 'wrongEmail';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = newsletterElement.querySelector('button');
    expect(button.disabled).toBe(true);
    expect(component.email.errors).toBeTruthy();
    expect(component.email.value).toEqual('wrongEmail');
    const errorMessage = newsletterElement.querySelector('.email-error');
    expect(errorMessage.textContent).toContain('Please enter the correct email, this email is not valid.');
  });

  it('button should be enabled and no error messages should be shown if email is correct', () => {

    const newsletterElement: HTMLElement = fixture.nativeElement;
    const input = newsletterElement.querySelector('input');
    input.value = 'correct@email.com';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const button = newsletterElement.querySelector('button');
    expect(button.disabled).toBe(false);
    expect(component.email.errors).toBeFalsy();
    expect(component.email.value).toEqual('correct@email.com');
    const errorMessage = newsletterElement.querySelector('.email-error');
    expect(errorMessage).toBeFalsy();
  });

  it('should call addSubscriber method of newsletter service', () => {
    component.email.setValue('correct@email.com');
    newsletterService.addSubscriber.and.callFake(() => of({
      email: 'correct@email.com'
    }));
    component.submitClicked();
    expect(newsletterService.addSubscriber).toHaveBeenCalledWith('correct@email.com');
    expect(newsletterService.addSubscriber).toHaveBeenCalledTimes(1);
  });

  it('should display success message if addSubscriber completed correctly', () => {
    component.email.setValue('correct@email.com');
    newsletterService.addSubscriber.and.callFake(() => of({
      email: 'correct@email.com'
    }));
    component.submitClicked();
    expect(component.response).toEqual('success');
    fixture.detectChanges();

    const newsletterElement: HTMLElement = fixture.nativeElement;
    const successMessage = newsletterElement.querySelector('.response-success');
    expect(successMessage.textContent).toContain('Thank you for joining our newsletter!');
  });

  it('should display error message if addSubscriber completed incorrectly (wrong email)', () => {
    component.email.setValue('correct@email.com');
    newsletterService.addSubscriber.and.callFake(() => of({
      email: 'error'
    }));
    component.submitClicked();
    expect(component.response).toEqual('error');
    fixture.detectChanges();

    const newsletterElement: HTMLElement = fixture.nativeElement;
    const successMessage = newsletterElement.querySelector('.response-success');
    expect(successMessage).toBeFalsy();
    const errorMessage = newsletterElement.querySelector('.response-error');
    expect(errorMessage.textContent).toContain('Something went wrong');
    expect(errorMessage.textContent).toContain('Please try again later.');
  });

  it('should display error message if addSubscriber completed incorrectly (error observable)', () => {
    component.email.setValue('correct@email.com');
    newsletterService.addSubscriber.and.callFake(() => Observable.throw('test'));
    component.submitClicked();
    expect(component.response).toEqual('error');
    fixture.detectChanges();

    const newsletterElement: HTMLElement = fixture.nativeElement;
    const successMessage = newsletterElement.querySelector('.response-success');
    expect(successMessage).toBeFalsy();
    const errorMessage = newsletterElement.querySelector('.response-error');
    expect(errorMessage.textContent).toContain('Something went wrong');
    expect(errorMessage.textContent).toContain('Please try again later.');
  });
});
