import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private routes: Router, private service: AuthService) { }
  msg = "";
  ngOnInit() {
  }
  check(uname: string, p: string) {
    var output = this.service.checkUsernameandPassword(uname, p);
    if (output == true) {
      this.routes.navigate(['/dashboard']);
    }
    else {
      this.msg = 'Invalid username or password';
      console.log(this.msg);

    }


  }

}
