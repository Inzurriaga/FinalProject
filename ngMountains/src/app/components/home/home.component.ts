import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  screenHeight: number;
  screenWidth: number;
  layerOne: string = "";
  LayerTwo: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.screenHeight = window.innerHeight;
    this.checkCredentials();
  }

  checkCredentials = () => {
    if(localStorage.getItem("credentials")) {
      this.router.navigateByUrl("user")
    }
  }

  mouseEvent = (e) => {
    let ratio  = e.clientY / this.screenHeight;
    let number = ratio * 10
    this.layerOne = `transform: translate(0, -${number * 3}px)`;
    this.LayerTwo = `transform: translate(0, -${number}px)`;

  }
}
