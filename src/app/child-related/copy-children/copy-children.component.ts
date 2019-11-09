import {Component, OnInit} from '@angular/core';
import {Camp} from '../../model/camp';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {Child} from '../../model/child';
import {EditChildComponent} from '../edit-child/edit-child.component';
import {ChildService} from '../../service/child.service';

@Component({
    selector: 'app-copy-children',
    templateUrl: './copy-children.component.html',
    styleUrls: ['./copy-children.component.css']
})
export class CopyChildrenComponent implements OnInit {

    camps: Camp[];
    children: Child[] = [];
    campId: number;

    constructor(private campService: CampService,
                private childService: ChildService,
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

    edit(child: Child) {
        const dialogRef = this.dialog.open(EditChildComponent, {data: child});
        dialogRef.afterClosed().subscribe(result => {
            child.name = result.name;
            child.age = result.age;
            child.representative = result.representative;
            child.contact = result.contact;
        });
    }

    remove(id: number) {
        const index = this.children.findIndex(worker => worker.id === id);
        this.children.splice(index, 1);
    }

    campChanged() {
        this.children = Object.assign([], this.children = this.childService.getChildrenN().filter(child => child.campIds.some(id => id === +this.campId)));
    }

    copy() {
        this.children.forEach(child => this.childService.addChildToCamp(child.id, this.getCampId()));
        this.router.navigate(['../children'], {relativeTo: this.route});
    }

}
