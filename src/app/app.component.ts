import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'controle';

  constructor(protected authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    let token = this.authService.currentUserValue();
    if (token == null) this.router.navigateByUrl('/login');
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
}
