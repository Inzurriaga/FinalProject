import { User } from './../../models/user';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import * as Stomp from 'stompjs';
import SockJS from 'sockjs-client';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit, OnDestroy {

  stompClient;

  @Input() closeChatModal;

  constructor() { }

  ngOnInit(): void {
    this.connect();
  }

  connect() {
    let socket = new SockJS('http://localhost:8090/chatroom-websocket');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame)=> {
      console.log("connected: " + frame);
      this.stompClient.subscribe('/server/message', (message)=> {
        this.addMessage(message);
      });
    });
  }

  addMessage(message) {
    console.log(JSON.parse(message.body));
  }

  sendMessage() {
    this.stompClient.send('/client/message', {}, JSON.stringify({
      message: "hello world",
      user: new User(2),
      chatroom: {
        id: 1
      }
    }))
  }

  ngOnDestroy(): void {
    if(this.stompClient){
      this.stompClient.disconnect()
    }
  }
}
