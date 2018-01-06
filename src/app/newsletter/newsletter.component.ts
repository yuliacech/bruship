import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NewsletterService} from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.less']
})
export class NewsletterComponent implements OnInit {

  form: FormGroup;
  disableButton = false;
  response: string;
  constructor(private newsletterService: NewsletterService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  isEmailValid(): boolean {
    console.log('this.form');
    console.log(this.form);
    return this.form.get('email').errors == null;
  }

  submitClicked() {
    this.disableButton = true;
    this.response = null;
    const email = this.form.getRawValue().email;
    this.newsletterService.addSubscriber(email).subscribe(next => {
      this.disableButton = false;
      if (next['email'] && next['email'] === email) {
        this.response = 'success';
      } else {
        this.response = 'error';
      }
    }, err => {
      console.error(err);
      this.disableButton = false;
      this.response = 'error';
    });
  }

}
