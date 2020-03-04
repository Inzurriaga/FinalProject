import { State } from './../../models/state';
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { StateService } from './../../services/state.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  @Input() updateUser: User;

  @Input() open: boolean;

  @Input() closeEditUserModal;

  states: State[];

  key = "AZi5SvxekTvSYJ6qKdNtAz";

  constructor(private stateSrv: StateService, private userSrv: UserService) { }

  ngOnInit(): void {
    this.getStates();
  }

  getStates = () => {
    this.stateSrv.index().subscribe(
      data => {
        this.states = data;
      },
      err => console.log(err)
    )
  }

  onUploadSuccess(e) {
    this.updateUser.imageUrl = e.filesUploaded[0].url;
  }

  updateUserInfo = () => {
    this.userSrv.update(this.updateUser).subscribe(
      data => {
        this.closeEditUserModal(data)
      },
      err => console.log(err)
    )
  }

}
