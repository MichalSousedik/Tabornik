import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {EditWorkerComponent} from '../edit-worker/edit-worker.component';

@Component({
    selector: 'app-accepted-workers',
    templateUrl: './accepted-workers.component.html',
    styleUrls: ['./accepted-workers.component.css']
})
export class AcceptedWorkersComponent implements OnInit {

    accepteds: User[];

    constructor(private campService: CampService,
                private route: ActivatedRoute,
                public dialog: MatDialog) {
    }

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

    edit(worker: User) {
        const dialogRef = this.dialog.open(EditWorkerComponent, {data: worker});
        dialogRef.afterClosed().subscribe(result => {
            worker.position = result;
            if (result === 'Vedoucí') {
                this.campService.getCamp(+this.getCampId()).subscribe(
                    camp => camp.detail.leader = worker.name
                );
            }
            if (result === 'Zdravotník') {
                this.campService.getCamp(+this.getCampId()).subscribe(
                    camp => camp.detail.medic = worker.name
                );
            }
            if (result === 'Zástupce vedoucího') {
                this.campService.getCamp(+this.getCampId()).subscribe(
                    camp => camp.detail.backup = worker.name
                );
            }
        });
    }
}
