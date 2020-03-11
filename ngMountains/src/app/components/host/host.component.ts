import { MountainEvent } from 'src/app/models/mountain-event';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss']
})
export class HostComponent implements OnInit {

  users: User[] = [];
  events: MountainEvent[] = [];

  constructor(private authSrv: AuthService, private router: Router, private userSrv: UserService, private eventSrv: EventService) { }

  ngOnInit(): void {
    this.getAllUsers();
    this.getAllEvents();
  }

  getAllUsers = () => {
      this.userSrv.index().subscribe(
        data => {
          this.users = data.filter(x => x.role === "standard");
        },
        err => {
          console.log(err)
        }
      )
  }

  getAllEvents = () => {
    this.eventSrv.available().subscribe(
      data => {
        this.events = data;
      }
    )
  }

  disableUser = (userId: number) => {
    let index: number;
    let user: User;
    this.users.forEach((x, i) => {
      if(x.id === userId) {
        user = x;
        index = i;
      }
    })
    user.enabled = false;
    this.userSrv.update(user).subscribe(
      data => {
        this.users[index] = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  enableUser = (userId: number) => {
    let index: number;
    let user: User;
    this.users.forEach((x, i) => {
      if(x.id === userId) {
        user = x;
        index = i;
      }
    })
    user.enabled = true;
    this.userSrv.update(user).subscribe(
      data => {
        this.users[index] = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
