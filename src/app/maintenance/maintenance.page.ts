import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../notification.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.page.html',
  styleUrls: ['./maintenance.page.scss'],
})
export class MaintenancePage implements OnInit {

  private todo: FormGroup;

  constructor( private formBuilder: FormBuilder, private toasterService: ToastController, private notifications: NotificationService) {
    this.toasterService = toasterService;
    this.notifications = notifications;
    this.todo = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
  }

  async logForm(value) {
    this.notifications.send(value);
    const toast = await this.toasterService.create({
      duration: 2000,
      color: 'success',
      message: `Value ${JSON.stringify(this.todo.value)} has been submitted`,
      header: 'Submission Successful'
    });
    toast.present();
  }

  getNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  toastSomething() {
    const unread = this.notifications.getUnread();
    for (const elem of unread) {
      this.toasterService.pop('success', 'Unread Message',  `Message is: ${JSON.stringify(elem)}`);
    }
  }
}
