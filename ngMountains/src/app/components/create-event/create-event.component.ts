import { Component, OnInit } from '@angular/core';
import { MountainService } from 'src/app/services/mountain.service';
import { StateService } from 'src/app/services/state.service';
import { MountainClassService } from 'src/app/services/mountain-class.service';
import { EventService } from 'src/app/services/event.service';
import { MountainEvent } from 'src/app/models/mountain-event';
import { MountainClass } from 'src/app/models/mountain-class';
import { State } from 'src/app/models/state';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  // Field
  states: State[] = [];
  mountainClasses: MountainClass[] = [];
  event = new MountainEvent();
  mountainNameInput = false;
  mountainLatInput = false;
  mountainLongInput = false;
  mountainHeightInput = false;
  EventDateInput = false;
  EventDescriptionInput = false;
  LatRange = false;
  longRange = false;

  // constructor
  constructor(private stateSrv: StateService, private mountainClassSrv: MountainClassService,private eventSrv:EventService, private router: Router) { }


  //method
  ngOnInit(): void {
    this.getMountainClassList();
    this.getStateList();
  }

  getStateList() {
    this.stateSrv.index().subscribe(
      data => {
        this.states = data;
      },
      err=>{
        console.log(err);

      }
    )
  }

  getMountainClassList() {
    this.mountainClassSrv.index().subscribe(
      data=> {
        this.mountainClasses=data;
      },
      err=>{
        console.log(err);
      }
    )
  }

  checkInput = (stepper: MatStepper): boolean => {
    this.mountainNameInput = false;
    this.mountainLatInput = false;
    this.mountainLongInput = false;
    this.mountainHeightInput = false;
    this.EventDateInput = false;
    this.EventDescriptionInput = false;
    this.LatRange = false;
    this.longRange = false;
    let checked = true;
    if(!this.event.mountain.name) {
      checked = false;
      this.mountainNameInput = true;
    }
    if(!this.event.mountain.latitude) {
      checked = false;
      this.mountainLatInput = true;
    }
    if(!this.event.mountain.longitude) {
      checked = false;
      this.mountainLongInput = true;
    }
    if(!this.event.mountain.height) {
      checked = false;
      this.mountainHeightInput = true;
    }
    if(!this.event.eventDate) {
      checked = false;
      this.EventDateInput = true;
    }
    if(!this.event.description) {
      checked = false;
      this.EventDescriptionInput = true;
    }
    if(this.event.mountain.longitude > 180 || this.event.mountain.longitude < -180 ) {
      checked = false;
      this.mountainLongInput = false;
      this.longRange = true;
    }
    if(this.event.mountain.latitude > 90 || this.event.mountain.latitude < -90) {
      checked = false;
      this.mountainLatInput = false;
      this.LatRange = true;
    }
    if(this.mountainHeightInput || this.mountainLatInput || this.mountainLongInput || this.mountainNameInput || this.longRange || this.LatRange) {
      checked = false;
      stepper.previous();
    }
    return checked;
  }

  createEvent(stepper: MatStepper) {
    let checked = this.checkInput(stepper);
    if(checked) {
      this.eventSrv.createEvent(this.event).subscribe(
        data=>{
          this.router.navigateByUrl("events/"+data.id);
        },
        err=>{
          console.log(err);
        }
      )
    }
  }
}
