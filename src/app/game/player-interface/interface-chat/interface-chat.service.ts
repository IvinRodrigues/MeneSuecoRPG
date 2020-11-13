import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterfaceChatService {
  
  chatStatus: boolean = false
  public messageChatStatus = new BehaviorSubject(this.chatStatus)
  currentStatus = this.messageChatStatus.asObservable()

  chatDialog: any = false
  public messageChatDialog = new BehaviorSubject(this.chatDialog)
  currentChatDialog = this.messageChatDialog.asObservable()



  constructor() { }



  open() {

    this.messageChatStatus.next(true)

  }



  dismiss() {

    this.messageChatStatus.next(false)

  }



  sendDialog(dialog) {

    this.messageChatDialog.next(dialog)

  }



}
