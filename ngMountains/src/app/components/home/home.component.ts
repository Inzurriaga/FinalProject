import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(private authSrv: AuthService) { }

  ngOnInit(): void {
  }
  createUser(){
    console.log(this.user);
    
    this.authSrv.register(this.user).subscribe(
      data=> console.log(data),

      error=>console.log(error)
      
    );
  }
}
