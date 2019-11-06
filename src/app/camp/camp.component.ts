import { Component, OnInit } from '@angular/core';
import {Camp} from '../camp';
import {CampService} from '../camp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.css']
})
export class CampComponent implements OnInit {


  camp: Camp;
  loaded = false;

  constructor(private campService: CampService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCamp();
  }

  private getCamp() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.campService.getCamp(+id).subscribe(camp => {
      this.camp = camp;
      this.loaded = true;
    });
  }

}
