import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  isExist: boolean;

  model = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private userService: UserService) {
    this.isExist = true;
  }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    const username = e.target.elements[0].value;
    const password = e.target.elements[1].value;
    if (username === 'admin' && password === 'admin') {
      this.isExist = true;
      this.userService.setUserLoggedIn();
      this.router.navigate(['dashboard']);
    } else {
      this.isExist = false;
    }
  }

}
