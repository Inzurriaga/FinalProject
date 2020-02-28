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

  editEvent = new MountainEvent();
  @Input() open: boolean;
  @Input() closeEditEventModal;

  mountainEvent= new MountainEvent();

  key= "abc";

  constructor(private eventSrv: EventService) { }

  ngOnInit(): void {

  }

  // getState = () => {
  //   this.stateSrv.index().suscribe(
  //     data => {
  //       this.states = data;
  //     },
  //     err => console.log(err)
  //   )
  //   console.log(this.mountains);
  // }

  onSubmit =() => {
this.eventSrv.updateEvent(1, this.editEvent).subscribe(
  data => {
    this.closeEditEventModal(data)
  },
  err =>console.log(err)
  )
  }
}
