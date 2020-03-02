import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events= [];

  constructor(private eventSrv: EventService, private authSrv: AuthService, private router: Router) {

   }

  ngOnInit(): void {
    this.getEventList();
  }

  getEventList() {
    this.eventSrv.index().subscribe(
      events => this.events= events,
      err => console.log(err)

    )
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
