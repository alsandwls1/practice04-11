import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../../service/chat.service';
// import { AuthService } from '../../../../services/auth.service';
import { ChatMessage } from '../../../../model/chat-message.model';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage;
  userEmail: string;
  userName: string;
  messageContent: string;
  timeStamp: Date = new Date();
  isOwnMessage: boolean;
  ownEmail: string;

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = chatMessage.message;
    this.timeStamp = chatMessage.timeSent;
    this.userEmail = chatMessage.email;
    this.userName = chatMessage.userName;
  }

}
