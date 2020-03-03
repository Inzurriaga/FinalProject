import { Component, OnInit } from '@angular/core';
import { MountainEvent } from 'src/app/models/mountain-event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-host-event',
  templateUrl: './host-event.component.html',
  styleUrls: ['./host-event.component.scss']
})
export class HostEventComponent implements OnInit {
  key = "pk.eyJ1IjoiaW56dXJyaWFnYSIsImEiOiJjazB5YmZsdm0wNW1tM2NwMGZ0Z2o5Z3c1In0.5sl6uFI9kbbTD3KqXJYU5Q";

  events;

  constructor(private currentRoute: ActivatedRoute,
                  private eventSrv: EventService,
                  private authSrv: AuthService,
                  private userSrv: UserService,
                  private router: Router) { }

  ngOnInit(): void{
    this.eventSrv.searchByHost("sonic").subscribe(
      data=> {
        console.log(data)
        this.events = data
      },
      err=>{
        console.log(err);

      }

    )
  }

  mountUrl(event: MountainEvent) {
    let long = (Math.floor((event.mountain.longitude+180)/360*Math.pow(2,10)));
    let lat = (Math.floor((1-Math.log(Math.tan(event.mountain.latitude*Math.PI/180) + 1/Math.cos(event.mountain.latitude*Math.PI/180))/Math.PI)/2 *Math.pow(2,10)));
    return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/10/${long}/${lat}?access_token=${this.key}`
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
