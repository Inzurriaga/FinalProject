import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount = () => {
    console.log(this.user)
    this.authSrv.register(this.user).subscribe(
      data => {
        console.log(data);
        this.login();
      },
      err => console.log(err)
    )
  }

  login = () => {
    this.authSrv.login(this.user.username, this.user.password).subscribe(
      data => {
        console.log(data);
        this.router.navigateByUrl("user");
      },
      error=>console.log(error)
    );
  }

}
