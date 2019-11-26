import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ClientsComponent } from './clients/clients.component';
import { AnalysesComponent } from './analyses/analyses.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'clients/:code/analyses',
    component: AnalysesComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientsComponent,
    AnalysesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
