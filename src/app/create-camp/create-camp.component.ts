import { Component, OnInit } from '@angular/core';
import {Camp} from '../camp';
import {CampService} from '../camp.service';
import {Router} from '@angular/router';
import {Detail} from '../detail';

@Component({
  selector: 'app-create-camp',
  templateUrl: './create-camp.component.html',
  styleUrls: ['./create-camp.component.css']
})
export class CreateCampComponent implements OnInit {

  camp: Camp = {id: 0, capacity: 0, occupied: 0, detail: new Detail(), workers: [], pendings: []};

  constructor(private campService: CampService,
              private router: Router) { }

  ngOnInit() {
  }

  createCamp() {
    console.log(this.camp);
    this.campService.addCamp(this.camp);
    this.router.navigate(['/camp-list']);
  }

}
