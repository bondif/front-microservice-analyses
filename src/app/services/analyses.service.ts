import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Client} from '../models/Client';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {Analyse} from '../models/Analyse';

@Injectable({
  providedIn: 'root'
})
export class AnalysesService {

  token: any = this.auth.currentUserValue();
  headers = {headers: {'Authorization': this.token}};

  constructor(private auth: AuthService,
              private router: Router,
              private http: HttpClient) { }

  getAll(clientCode: string) {
    return this.http.get(environment.baseUrl + 'clients/' + clientCode + "/analyses", this.headers)
      .toPromise<any>()
      .catch((err: HttpErrorResponse) => {
        if (err.status === 403) {
          this.auth.logout();
          this.router.navigateByUrl('/login');
        }
      })
      .then(res => <Analyse[]> res._embedded.analyses)
      .then((data) => {
        return data;
      })
  }
}
