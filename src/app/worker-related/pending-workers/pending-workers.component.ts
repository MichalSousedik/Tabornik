import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../structure/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-pending-workers',
  templateUrl: './pending-workers.component.html',
  styleUrls: ['./pending-workers.component.css']
})
export class PendingWorkersComponent implements OnInit {

  pendings: User[];

  constructor(private campService: CampService,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.campService.getPendings(+this.getCampId()).subscribe(
      pendings => this.pendings = pendings
    );
  }


  addPending(id: number) {
    this.campService.addPendingToWorkers(id, +this.getCampId());
  }

  removePending(id: number, event) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: 'Opravdu chcete zamítnout tohoto žadatele?'});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.campService.removePending(id, +this.getCampId());
      }
    });
    event.stopPropagation();
  }

  getCampId() {
    return this.route.parent.snapshot.paramMap.get('id');
  }
}
