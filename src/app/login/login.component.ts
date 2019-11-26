import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  auth(form: NgForm) {
    this.authService.login(form.value);
  }

  logout() {
    this.authService.logout();
  }

}
