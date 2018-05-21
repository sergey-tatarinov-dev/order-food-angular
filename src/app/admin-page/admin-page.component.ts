import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('loggedIn');
    this.router.navigate(['/login']);
  }
}
