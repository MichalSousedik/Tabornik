import {Component, OnInit} from '@angular/core';
import {Child} from '../child';
import {ChildService} from '../child.service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {EditChildComponent} from '../edit-child/edit-child.component';

@Component({
    selector: 'app-children',
    templateUrl: './children.component.html',
    styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

    children: Child[];

    constructor(private childService: ChildService,
                private route: ActivatedRoute,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.getChildren();
    }

    getChildren() {
        this.childService.getChildren().subscribe(
            children => {
                this.children = children.filter(child => child.campIds.some(id => id === this.getCampId()));
            });
    }

    getCampId(): number {
        return +this.route.parent.snapshot.paramMap.get('id');
    }

    cashApprove(id: number) {
        this.childService.validateChild(id, this.getCampId());
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
        this.childService.removeChildFromCamp(id, this.getCampId());
        this.getChildren();
    }

    hasChildPaid(child: Child) {
        const index = child.campIds.findIndex(i => i === this.getCampId());
        return child.paids[index];
    }
}
