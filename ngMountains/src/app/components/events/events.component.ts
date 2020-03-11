import { environment } from './../../../environments/environment';
import { MountainEvent } from 'src/app/models/mountain-event';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events= [];
  key = environment.mapbox;

  constructor(
    private eventSrv: EventService,
    private authSrv: AuthService,
    private router: Router,
    private userSrv: UserService,
    ) {}

  ngOnInit(): void {
    this.getEventList();
  }

  getEventList() {
    this.eventSrv.available().subscribe(
      events => this.events= events,
      err => console.log(err)

    )
  }

  createUrl(event: MountainEvent) {
    let long = (Math.floor((event.mountain.longitude+180)/360*Math.pow(2,10)));
    let lat = (Math.floor((1-Math.log(Math.tan(event.mountain.latitude*Math.PI/180) + 1/Math.cos(event.mountain.latitude*Math.PI/180))/Math.PI)/2 *Math.pow(2,10)));
    return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/10/${long}/${lat}?access_token=${this.key}`
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
