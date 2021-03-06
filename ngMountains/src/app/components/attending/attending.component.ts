import { environment } from './../../../environments/environment';
import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MountainEvent } from 'src/app/models/mountain-event';
@Component({
  selector: 'app-attending',
  templateUrl: './attending.component.html',
  styleUrls: ['./attending.component.scss']
})
export class AttendingComponent implements OnInit {
  key = environment.mapbox;

  events;

  constructor(private currentRoute: ActivatedRoute,
                  private eventSrv: EventService,
                  private authSrv: AuthService,
                  private userSrv: UserService,
                  private router: Router) { }

  ngOnInit(): void{
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.eventSrv.searchByUser(userName).subscribe(
      data=> {
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
