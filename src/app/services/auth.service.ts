import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(credentials: any) {
    return this.http.post<any>(environment.authUrl + 'login',
      credentials,
      {observe: 'response'})
      .subscribe(resp => {
        localStorage.setItem('currentUser', JSON.stringify(resp.headers.get('Authorization')));
        this.currentUserSubject = new BehaviorSubject(JSON.parse(JSON.stringify(resp.headers.get('Authorization'))));
        this.currentUser = this.currentUserSubject.asObservable();
        this.router.navigateByUrl("/clients");
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
