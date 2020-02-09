import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import {NotificationService} from '../notification.service';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  private todo: FormGroup;
  private toasterService: ToasterService;
  private notifications: NotificationService;

  constructor( private formBuilder: FormBuilder, toasterService: ToasterService, notifications: NotificationService) {
    this.toasterService = toasterService;
    this.notifications = notifications;
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    })
  }

  ngOnInit() {
  }

  logForm(value) {
    this.notifications.send(value)
    this.toasterService.pop('success', 'Submission Successful', 'Value ' + JSON.stringify(this.todo.value) + ' has been submitted');
  }

  getNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  toastSomething() {
    const unread = this.notifications.getUnread();
    for (let any of unread) {
      this.toasterService.pop('success', 'Unread Message',  `Message is: ${JSON.stringify(any)}`);
    }
  }
}
