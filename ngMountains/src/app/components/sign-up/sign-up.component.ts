import { State } from './../../models/state';
import { StateService } from 'src/app/services/state.service';
import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  user = new User();
  imagePath = "";
  key = "AZi5SvxekTvSYJ6qKdNtAz"
  states: State[] = [];
  usernameError = false;
  emailError = false;
  passwordError = false;
  availability = false;
  usernameAvaible = false;

  constructor(private authSrv: AuthService, private stateSrv: StateService, private router: Router) { }

  ngOnInit(): void {
    this.getStates();
  }

  image = (e) => {
    console.log(e)
  }

  getStates = () => {
    this.stateSrv.index().subscribe(
      data => {
        console.log(data)
        this.states = data;
      },
      err => console.log(err)
    )
  }

  checkInput = () => {
    this.usernameError = false;
    this.passwordError = false;
    this.emailError = false;
    this.usernameAvaible = false;
    if(!this.user.username) {
      this.usernameError = true;
    }
    if(!this.user.password) {
      this.passwordError = true;
    }
    if(!this.user.email) {
      this.emailError = true;
    }
  }

  checkUsername = (stepper: MatStepper) => {
    this.checkInput();
    this.authSrv.availability(this.user).subscribe(
      data => {
        if(data && !this.usernameError && !this.emailError && !this.passwordError) {
          this.usernameAvaible = false;
          stepper.next();
        } else if(!this.usernameError) {
          this.usernameAvaible = true;
        }
      },
      err => console.log(err)
    )
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

  onUploadSuccess = (e) => {
    this.imagePath = e.filesUploaded[0].filename;
    this.user.imageUrl = e.filesUploaded[0].url;
  }

}
