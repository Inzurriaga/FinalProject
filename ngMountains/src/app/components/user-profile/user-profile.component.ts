import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();

  constructor(private authSrv:AuthService, private userSrv: UserService,private router: Router) { }

  ngOnInit(): void {
    if(this.authSrv.checkLogin()) {
      this.getUserDetails();
    } else {
      this.router.navigateByUrl("home");
    }
  }

  getUserDetails = () => {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userSrv.show(userName).subscribe(
      data => {
        console.log(data)
        this.user = data
      },
      err => console.log(err)
    );
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
