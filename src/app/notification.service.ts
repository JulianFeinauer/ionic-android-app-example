import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notifications: Array<any> = [];
  length: number = 0;

  constructor() { }

  getNumberOfUnread(): number {
    return this.notifications.length;
  }

  getUnread(): Array<any> {
    let res = this.notifications;
    this.notifications = [];
    return res;
  }

  send(obj: any) {
    this.notifications.push(obj);
    this.length = this.getNumberOfUnread();
  }
}
