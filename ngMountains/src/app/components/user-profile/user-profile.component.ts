import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Mountain } from 'src/app/models/mountain';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = new User();

  updateUser: User;

  editModal = false;

  key = "pk.eyJ1IjoiaW56dXJyaWFnYSIsImEiOiJjazB5YmZsdm0wNW1tM2NwMGZ0Z2o5Z3c1In0.5sl6uFI9kbbTD3KqXJYU5Q"

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

  createUrl(mountain: Mountain) {
    let long = (Math.floor((mountain.longitude+180)/360*Math.pow(2,12)));
    let lat = (Math.floor((1-Math.log(Math.tan(mountain.latitude*Math.PI/180) + 1/Math.cos(mountain.latitude*Math.PI/180))/Math.PI)/2 *Math.pow(2,12)));
    return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/12/${long}/${lat}?access_token=${this.key}`
  }

  openEditUserModal = () => {
    this.updateUser = Object.assign({}, this.user)
    this.editModal = true;
  }

  closeEditUserModal = () => {
    this.getUserDetails();
    this.editModal = false;
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
