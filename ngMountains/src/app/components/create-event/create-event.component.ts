import { Component, OnInit } from '@angular/core';
import { MountainService } from 'src/app/services/mountain.service';
import { StateService } from 'src/app/services/state.service';
import { MountainClassService } from 'src/app/services/mountain-class.service';

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

  mountain: string;

  state: string;

  mountainClass: string;

  // constructor
  constructor(private mountainSrv: MountainService, private stateSrv: StateService, private mountainClassSrv: MountainClassService) { }


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


}
