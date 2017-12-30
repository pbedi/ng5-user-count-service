import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService  {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private cs:CounterService) {
    this.cs.activeUserCount = this.activeUsers.length;
    this.cs.inactiveUsersCount = this.inactiveUsers.length;
    console.log('count', this.cs.activeUserCount, this.cs.inactiveUsersCount);
   }


    moveToInactive(pos:number) {
      this.inactiveUsers.push(this.activeUsers[pos]);
      this.activeUsers.splice(pos,1);
      this.cs.increaseInactiveUser();
    }

    moveToActive(pos:number) {
      this.activeUsers.push(this.inactiveUsers[pos]);
      this.inactiveUsers.splice(pos,1);
      this.cs.increaseActiveUser();
    }
}
