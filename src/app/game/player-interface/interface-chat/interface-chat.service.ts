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

  navigationButtons =  document.getElementsByClassName('navigation-button') as HTMLCollectionOf<HTMLElement>



  constructor() { }



  open() {

    this.messageChatStatus.next(true)
    this.changeButtons('0')

  }



  dismiss() {

    this.messageChatStatus.next(false)
    this.changeButtons('1')

  }



  sendDialog(dialog) {

    this.messageChatDialog.next(dialog)

  }



  changeButtons(value) {

    for (var i = 0; i < this.navigationButtons.length; i++) {

      this.navigationButtons[i].style.opacity = value;

    }

  }



}
