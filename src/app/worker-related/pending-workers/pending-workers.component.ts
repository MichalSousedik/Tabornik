import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pending-workers',
  templateUrl: './pending-workers.component.html',
  styleUrls: ['./pending-workers.component.css']
})
export class PendingWorkersComponent implements OnInit {

  pendings: User[];

  constructor(private campService: CampService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.campService.getPendings(+this.getCampId()).subscribe(
      pendings => this.pendings = pendings
    );
  }


  addPending(id: number) {
    this.campService.addPendingToWorkers(id, +this.getCampId());
  }

  removePending(id: number) {
    this.campService.removePending(id, +this.getCampId());
  }

  getCampId() {
    return this.route.parent.snapshot.paramMap.get('id');
  }
}
