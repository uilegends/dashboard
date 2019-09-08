import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUsernameandPassword(username: string, pwd: string) {
    if (username == 'admin' && pwd == 'pass123') {
      localStorage.setItem('username', 'admin');
      console.log('Valid Admin');
      return true;
    } else {
      return false;
    }
  }
}
