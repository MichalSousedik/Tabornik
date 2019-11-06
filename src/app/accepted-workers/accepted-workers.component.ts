import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {CampService} from '../camp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-accepted-workers',
  templateUrl: './accepted-workers.component.html',
  styleUrls: ['./accepted-workers.component.css']
})
export class AcceptedWorkersComponent implements OnInit {

  accepteds: User[];

  constructor(private campService: CampService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.campService.getWorkers(+this.getCampId()).subscribe(
      accepteds => this.accepteds = accepteds
    );
  }

  getCampId() {
    return this.route.parent.snapshot.paramMap.get('id');
  }

  remove(id: number) {
    this.campService.removeWorker(id, +this.getCampId());
  }

  edit(id: number) {
    
  }
}
