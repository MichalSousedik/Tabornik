import { Component, OnInit } from '@angular/core';
import {Camp} from '../camp';
import {CampService} from '../camp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user';
import { MatDialog } from '@angular/material';
import {EditWorkerComponent} from '../edit-worker/edit-worker.component';

@Component({
  selector: 'app-copy-workers',
  templateUrl: './copy-workers.component.html',
  styleUrls: ['./copy-workers.component.css']
})
export class CopyWorkersComponent implements OnInit {

  camps: Camp[];
  workers: User[] = [];
  campId: number;

  constructor(private campService: CampService,
              private route: ActivatedRoute,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.campService.getDifferentCamps(this.getCampId()).subscribe(camps => {
      this.camps = camps;
    });
  }

  getCampId(): number {
    return +this.route.parent.snapshot.paramMap.get('id');
  }

  edit(worker: User) {
    const dialogRef = this.dialog.open(EditWorkerComponent, {data: worker});
    dialogRef.afterClosed().subscribe(result => {
      worker.position = result;
    });
  }

  remove(id: number) {
    const index = this.workers.findIndex(worker => worker.id === id);
    this.workers.splice(index, 1);
  }

  campChanged() {
    this.workers = Object.assign([], this.campService.getWorkersN(+this.campId));
  }

  copy() {
    this.workers.forEach(worker => this.campService.addWorker(worker, this.getCampId()));
    this.router.navigate(['../workers'], { relativeTo: this.route });
  }
}
