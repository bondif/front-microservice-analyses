import { Component, OnInit } from '@angular/core';
import {Client} from '../models/Client';
import {ClientsService} from '../services/clients.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientsService: ClientsService,
              private router: Router) { }

  ngOnInit() {
    this.clientsService.getAll().then(data => {
      this.clients = data;
    })
  }

  goToAnalyses(code: string) {
    this.router.navigateByUrl('/clients/' + code + "/analyses");
  }
}
