import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  public username;

  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
    this.username = 'admin';
    localStorage.setItem('loggedIn', 'true');
  }

  getUserLoggedIn() {
    return JSON.parse(localStorage.getItem('loggedIn') || this.isUserLoggedIn.toString());
  }
}
