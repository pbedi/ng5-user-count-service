import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];

  constructor(private us:UsersService) {}

  ngOnInit() {
    this.users = this.us.activeUsers;
  }

  onSetToInactive(id: number) {
    this.us.moveToInactive(id);
  }
}
