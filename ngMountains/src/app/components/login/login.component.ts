import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;

  password: string;

  incorrect = false;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authSrv.login(this.username, this.password).subscribe(
      data => {
        this.router.navigateByUrl("user");
      },
      error=>{
        console.log(error)
        this.incorrect = true;
      }
    );
  }

}
