import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { MountainEvent } from 'src/app/models/mountain-event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  mountainEvent= new MountainEvent();

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {
  }

  onSubmit() {
this.eventSrv.updateEvent(1, this.mountainEvent).subscribe(
  data => console.log(data),
  err =>console.log(err)
);
  }
}
