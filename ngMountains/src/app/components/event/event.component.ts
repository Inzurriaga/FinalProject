import { MountainEvent } from './../../models/mountain-event';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  mountainEvent = new MountainEvent();
  MountainEventLoaded = false;
  eventId;

  constructor(private currentRoute: ActivatedRoute, private eventSrv: EventService, private userSrv: UserService, private authSrv: AuthService) { }

  ngOnInit(): void {
    this.eventId = this.currentRoute.snapshot.paramMap.get("id");
    console.log(this.mountainEvent)
    this.getEventDetails(this.eventId);
  }

  getEventDetails(id) {
    this.eventSrv.show(id).subscribe(
      data=> {
        console.log(data)
        this.mountainEvent = data
        this.MountainEventLoaded = true;
      },
      err=> console.log(err)
    )
  }

  joinEvent() {
  let userName = atob(this.authSrv.getCredentials()).split(":")[0];
  this.userSrv.show(userName).subscribe(
    data => {
      this.eventSrv.addUser(this.mountainEvent.id, data).subscribe(
        data => {
          console.log(data)
          this.getEventDetails(this.eventId)
        },
        err => console.log(err)
      )
    },
    err => console.log(err)
  )
  }



  unjoinEvent(){
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userSrv.show(userName).subscribe(
      data=>{
        this.eventSrv.deleteUser(this.mountainEvent.id,data).subscribe(
          data=> {
            console.log(data)
            this.getEventDetails(this.eventId)
          },
          err=>console.log(err)
        )
      },
      err=>console.log(err)
    )
  }

  joined(){
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    let joined = this.mountainEvent.users.reduce((acc, user) => {
      if(user.username === userName) {
        acc = true;
        return acc;
      }
    }, false)
    return joined;
  }

  host() {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    if(this.mountainEvent.host.username = userName) {
      return true
    }
    return false;
  }

}
