import {Component, OnInit} from '@angular/core';
import {Camp} from '../../model/camp';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../model/user';
import {MatDialog} from '@angular/material';
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
                public dialog: MatDialog) {
    }

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
        this.workers.forEach(worker => {
            this.campService.addWorker(worker, this.getCampId());
            if (worker.position === 'Vedoucí') {
                this.campService.getCamp(this.getCampId()).subscribe(
                    camp => camp.detail.leader = worker.name
                );
            }
            if (worker.position === 'Zdravotník') {
                this.campService.getCamp(this.getCampId()).subscribe(
                    camp => camp.detail.medic = worker.name
                );
            }
            if (worker.position === 'Zástupce vedoucího') {
                this.campService.getCamp(this.getCampId()).subscribe(
                    camp => camp.detail.backup = worker.name
                );
            }
        });

        this.router.navigate(['../workers'], {relativeTo: this.route});
    }
}
