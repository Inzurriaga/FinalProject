import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private authSrv:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut = () => {
    this.authSrv.logout();
    this.router.navigateByUrl("home");
  }

}
