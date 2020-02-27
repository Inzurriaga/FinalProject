import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @Input() user;

  @Input() open = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }


  close = () => {
    this.open = false;
  }

  ngOnDestroy(): void {
    console.log("good bye")
  }

}
