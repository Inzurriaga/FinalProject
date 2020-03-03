import { MountainEvent } from './../../models/mountain-event';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  mountainEvent = new MountainEvent();
  MountainEventLoaded = false;
  eventId;
  updateEvent: MountainEvent;
  editModal = false;
  chatModal = false;

  constructor(
    private currentRoute: ActivatedRoute,
    private eventSrv: EventService,
    private userSrv: UserService,
    private authSrv: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.eventId = this.currentRoute.snapshot.paramMap.get("id");
    console.log(this.mountainEvent)
    this.getEventDetails(this.eventId);
  }

  getEventDetails(id) {
    this.eventSrv.show(id).subscribe(
      data => {
        console.log(data)
        this.mountainEvent = data
        this.MountainEventLoaded = true;
      },
      err => console.log(err)
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

  unjoinEvent() {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userSrv.show(userName).subscribe(
      data => {
        this.eventSrv.deleteUser(this.mountainEvent.id, data).subscribe(
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

  deleteEvent() {
    console.log("delte me")
    this.eventSrv.deleteEvent(this.eventId).subscribe(
      data => {
        console.log(data)
        this.router.navigateByUrl("user");
      },
      err => console.log(err)
    );
  }

  completeEvent(){
    this.eventSrv.completeEvent(this.mountainEvent).subscribe(
      data =>{
        this.router.navigateByUrl("user")
      },
      err => console.log(err)
    )
  }

  joined() {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    // let joined = this.mountainEvent.users.reduce((acc, user) => {
    //   if(user.username === userName) {
    //     acc = true;
    //     console.log('joined():  ' + acc);
    //     return acc;
    //   }
    // }, false);
    let joined = false;
    for (let user of this.mountainEvent.users) {
      if ( user.username === userName) {
        joined = true;
        break;
      }
    }
    // console.log('joined():  ' + joined);
    return joined;
  }

  host() {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    if(this.mountainEvent.host.username === userName) {
      return true
    }
    // console.log('host(): ' + false);
    return false;
  }

  openEditEventModal = () => {
    this.updateEvent = Object.assign({}, this.mountainEvent)
    this.editModal = true;
  }

  closeEditUserModal = () => {
    this.getEventDetails(this.eventId);
    this.editModal = false;
  }

  openChatModal = () => {
    this.chatModal = true;
  }

  closeChatModal = () => {
    this.chatModal = false;
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }


  

}
