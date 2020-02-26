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

  event = {
    id: 1
  };

  constructor(private currentRoute: ActivatedRoute, private eventSrv: EventService, private userSrv: UserService, private authSrv: AuthService) { }

  ngOnInit(): void {
    let id= this.currentRoute.snapshot.paramMap.get("id");
    this.getEventDetails(id);
  }
  getEventDetails(id) {
    this.eventSrv.show(id).subscribe(
      data=> this.event = data,
      err=> console.log(err)
    )
  }

  joinEvent() {
  let userName = atob(this.authSrv.getCredentials()).split(":")[0];
  this.userSrv.show(userName).subscribe(
    data => {
      this.eventSrv.addUser(this.event.id, data).subscribe(
        data => console.log(data),
        err => console.log(err)
      )
    },
    err => console.log(err)
  )
  }

}
