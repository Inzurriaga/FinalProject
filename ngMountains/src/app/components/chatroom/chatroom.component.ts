import { environment } from './../../../environments/environment';
import { UserService } from './../../services/user.service';
import { Message } from './../../models/message';
import { Chatroom } from './../../models/chatroom';
import { AuthService } from './../../services/auth.service';
import { ChatroomService } from './../../services/chatroom.service';
import { User } from './../../models/user';
import { Component, OnInit, OnDestroy, Input, ViewChild, ElementRef } from '@angular/core';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  @ViewChild('scroll') private myScrollContainer: ElementRef;

  stompClient;

  url = environment.baseUrl;

  room: Chatroom;

  user: User;

  messages: Message[];

  message = "";

  userName;

  @Input() closeChatModal;
  @Input() eventId;

  constructor(private chatroomSrv: ChatroomService, private authSrv: AuthService, private userSrv: UserService) { }

  ngOnInit(): void {
    this.userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userSrv.show(this.userName).subscribe(
      data => {
        this.user = data;
      },
      err => {
        console.log(err)
      }
    )
    this.retrieveRoomMessages();
    this.connect();
  }

  retrieveRoomMessages = () => {
      this.chatroomSrv.chatroom(this.eventId).subscribe(
        data => {
          console.log(data)
          this.room = data;
          this.messages = data.messages.sort((a, b) => {return a.id - b.id});
          this.scrollToBottom();
        },
        err => {
          console.log(err)
        }
      )
  }

  connect() {
    let socket = new SockJS(this.url + "/chatroom-websocket");
    this.stompClient = Stomp.over(socket);
    this.stompClient.debug = ""
    this.stompClient.connect({}, (frame)=> {
      console.log("connected: " + frame);
      this.stompClient.subscribe('/server/message', (message)=> {
        this.addMessage(message);
      });
    });
  }

  addMessage(message) {
    this.messages.push(JSON.parse(message.body))
    this.scrollToBottom();
  }

  sendMessage() {
    let message = new Message()
    message.chatroom.id = this.room.id;
    message.message = this.message;
    message.user = this.user;
    this.stompClient.send('/client/message', {}, JSON.stringify(message))
  }

  scrollToBottom(): void {
    try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  ngOnDestroy(): void {
    if(this.stompClient){
      this.stompClient.disconnect()
    }
  }
}
