import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampService} from '../camp.service';
import {Camp} from '../camp';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  camp: Camp;
  loaded = false;

  constructor(private campService: CampService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCamp();
  }

  private getCamp() {
    const id = this.route.parent.snapshot.paramMap.get('id');
    this.campService.getCamp(+id).subscribe(camp => {
      this.camp = camp;
      this.loaded = true;
    });
  }
}
