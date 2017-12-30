import { Injectable } from '@angular/core';
import { NullAstVisitor } from '@angular/compiler';

@Injectable()
export class CounterService {
  inactiveUsersCount: number = 0;
  activeUserCount: number = 0;

  constructor() { }

  increaseInactiveUser() {
    this.inactiveUsersCount++;
    this.activeUserCount--;
    console.log('Inactive user count is ' + this.inactiveUsersCount);
  }

  increaseActiveUser() {
    this.inactiveUsersCount--;
    this.activeUserCount++;
    console.log('Active user count is ' + this.activeUserCount);
  }

}
