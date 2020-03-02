import { AuthService } from './../../services/auth.service';
import { UserService } from './../../services/user.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-attending',
  templateUrl: './attending.component.html',
  styleUrls: ['./attending.component.scss']
})
export class AttendingComponent implements OnInit {

  events;

  constructor(private currentRoute: ActivatedRoute,
                  private eventSrv: EventService,
                  private authSrv: AuthService,
                  private userSrv: UserService,
                  private router: Router) { }

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

  unjoinEvent(id){
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userSrv.show(userName).subscribe(
      data=>{
        this.eventSrv.deleteUser(id, data).subscribe(
          data=> console.log(data),
          err=>console.log(err)
        )
      },
      err=>console.log(err)
    )
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }
}
