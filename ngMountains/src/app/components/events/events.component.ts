import { EventService } from './../../services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {
    this.getEventList()
  }

  getEventList = () => {
    this.eventSrv.index().subscribe(
      events => {
        console.log(events);
        console.log("hello world")
        this.events = events
      },
      err => console.log(err)
    )
  }
}
