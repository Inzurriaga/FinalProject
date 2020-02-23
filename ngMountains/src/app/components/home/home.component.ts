import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user={
    username: "",
    password:"",
    role:"standard",
    enable:true
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkCredentials();
  }

  checkCredentials = () => {
    if(localStorage.getItem("credentials")) {
      this.router.navigateByUrl("user")
    }
  }
}
