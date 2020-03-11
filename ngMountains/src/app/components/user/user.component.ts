import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { Mountain } from 'src/app/models/mountain';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user = new User();

  key = environment.mapbox;

  constructor(private currentRoute: ActivatedRoute, private userSrv: UserService, private router: Router, private authSrv: AuthService) { }

  ngOnInit(): void {
    let userName = this.currentRoute.snapshot.paramMap.get("username");
    this.getUserDetails(userName)
  }

  getUserDetails = (userName: string) => {
    this.userSrv.show(userName).subscribe(
      data => {
        this.user = data
      },
      err => console.log(err)
    );
  }

  createUrl(mountain: Mountain) {
    let long = (Math.floor((mountain.longitude+180)/360*Math.pow(2,12)));
    let lat = (Math.floor((1-Math.log(Math.tan(mountain.latitude*Math.PI/180) + 1/Math.cos(mountain.latitude*Math.PI/180))/Math.PI)/2 *Math.pow(2,12)));
    return `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/512/12/${long}/${lat}?access_token=${this.key}`
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
