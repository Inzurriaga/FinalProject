import { Component, OnInit } from '@angular/core';
import { MountainService } from 'src/app/services/mountain.service';
import { StateService } from 'src/app/services/state.service';
import { MountainClassService } from 'src/app/services/mountain-class.service';
import { EventService } from 'src/app/services/event.service';
import { MountainEvent } from 'src/app/models/mountain-event';
import { Mountain } from 'src/app/models/mountain';
import { State } from 'src/app/models/state';
import { MountainClass } from 'src/app/models/mountain-class';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  // Field
  mountains = [];

  states = [];

  mountainClasses = [];

  mountain = new Mountain();

  state = new State();

  mountainClass = new MountainClass();

  event = new MountainEvent();

  // constructor
  constructor(private mountainSrv: MountainService, private stateSrv: StateService, private mountainClassSrv: MountainClassService,private eventSrv:EventService) { }


  //method
  ngOnInit(): void {
    this.getMountainClassList();
    this.getMountainList();
    this.getStateList();
  }

  getMountainList() {
    this.mountainSrv.index().subscribe(
      data => {
        this.mountains = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  getStateList(){
    this.stateSrv.index().subscribe(
      data => {
        this.states = data;
      },
      err=>{
        console.log(err);
        
      }
    )
  }

  getMountainClassList(){
    this.mountainClassSrv.index().subscribe(
      data=> {
        this.mountainClasses=data;
      },
      err=>{
        console.log(err);
      }
    )
  }
  createEvent(event){
    this.mountain.mountainClass = this.mountainClass;
    event.mountain = this.mountain;
    console.log("hello world")
    console.log(event)
    this.eventSrv.createEvent(event).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.log(err);  
      }
    )
  }

  

}
