import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Client} from '../models/Client';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  protected constructor(protected http: HttpClient,
                        private auth: AuthService,
                        private router: Router) {
  }

  token: any = this.auth.currentUserValue();
  headers = {headers: {'Authorization': this.token}};

  getAll() {
    return this.http.get(environment.baseUrl + 'clients', this.headers)
      .toPromise<any>()
      .then(res => <Client[]> res._embedded.clients)
      .catch((err: HttpErrorResponse) => {
        if (err.status === 403) {
          this.auth.logout();
          this.router.navigateByUrl('/login');
        }
      })
      .then((data: Client[]) => {
        return data;
      })
  }
}
