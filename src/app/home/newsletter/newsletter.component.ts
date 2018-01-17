import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NewsletterService} from './newsletter.service';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.less']
})
export class NewsletterComponent implements OnInit {

  email: FormControl;
  disableButton = false;
  response: string;
  constructor(private newsletterService: NewsletterService) {
  }

  ngOnInit() {
      this.email = new FormControl('', [
        Validators.required,
        Validators.email
      ]);
  }

  submitClicked() {
    this.disableButton = true;
    this.response = null;
    const email = this.email.value;
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
