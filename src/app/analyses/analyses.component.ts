import { Component, OnInit } from '@angular/core';
import {Analyse} from '../models/Analyse';
import {AnalysesService} from '../services/analyses.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {

  analyses: Analyse[];

  constructor(private analyseService: AnalysesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.analyseService.getAll(params.get("code")).then(data => {
        this.analyses = data;
      })
    });
  }

}
