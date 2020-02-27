import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-attending',
  templateUrl: './attending.component.html',
  styleUrls: ['./attending.component.scss']
})
export class AttendingComponent implements OnInit {

  events;

  constructor(private currentRoute: ActivatedRoute, private eventSrv: EventService, private authSrv: AuthService) { }

  ngOnInit(): void{
    this.eventSrv.searchByUser("sonic").subscribe(
      data=> {
        console.log(data)
        this.events = data
      },
      err=>{
        console.log(err);
        
      }
      
    )
  }

  

}
