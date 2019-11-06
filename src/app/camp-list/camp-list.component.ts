import { Component, OnInit } from '@angular/core';
import {CampService} from '../camp.service';
import {Camp} from '../camp';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-camp-list',
  templateUrl: './camp-list.component.html',
  styleUrls: ['./camp-list.component.css']
})
export class CampListComponent implements OnInit {

  camps: Camp[];

  constructor(private campService: CampService) { }

  ngOnInit() {
    this.campService.getUserCamps().subscribe(camps => this.camps = camps);
  }

  removeCamp(id: number) {
    this.campService.removeCamp(id);
  }
}
