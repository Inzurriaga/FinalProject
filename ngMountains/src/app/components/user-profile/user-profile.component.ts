import { UserInfoService } from './../../services/user-info.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any;

  constructor(private authSrv:AuthService, private userInfoSrv: UserInfoService,private router: Router) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails = () => {
    let userName = atob(this.authSrv.getCredentials()).split(":")[0];
    this.userInfoSrv.show(userName).subscribe(
      data => this.user = data,
      err => console.log(err)
    );
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
