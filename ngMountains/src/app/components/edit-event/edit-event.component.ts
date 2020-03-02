import { StateService } from './../../services/state.service';
import { MountainService } from './../../services/mountain.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit, Input } from '@angular/core';
import { MountainEvent } from 'src/app/models/mountain-event';
import { Mountain } from 'src/app/models/mountain';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  @Input() mountainEvent: MountainEvent;

  @Input() open: boolean;

  @Input() closeEditEventModal;

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {}

  onSubmit =() => {
    console.log(this.mountainEvent)
    this.eventSrv.updateEvent(this.mountainEvent.id, this.mountainEvent).subscribe(
      data => {
        this.closeEditEventModal()
        console.log(data)
      },
      err =>console.log(err)
    )
  }
}
