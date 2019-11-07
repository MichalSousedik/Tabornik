import {Component, OnInit} from '@angular/core';
import {Child} from '../child';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material';
import {ChildService} from '../child.service';
import {EditChildComponent} from '../edit-child/edit-child.component';

@Component({
    selector: 'app-add-child',
    templateUrl: './add-child.component.html',
    styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit {


    children: Child[];

    constructor(public dialog: MatDialog,
                public childService: ChildService,
                public route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getChildren();
    }

    getChildren() {
        this.childService.getChildren().subscribe(
            children => this.children = children.filter(child => !child.campIds.some(id => id === this.getCampId()))
        );
    }

    create() {
        const child = new Child();
        const dialogRef = this.dialog.open(EditChildComponent, {data: child});
        dialogRef.afterClosed().subscribe(result => {
            child.name = result.name;
            child.age = result.age;
            child.representative = result.representative;
            child.contact = result.contact;
            child.campIds = [];
            child.paids = [];
            this.childService.createChild(child);
            this.getChildren();
        });
    }

    add(child: Child) {
        this.childService.addChildToCamp(child.id, this.getCampId());
        this.getChildren();
    }

    getCampId(): number {
        return +this.route.parent.snapshot.paramMap.get('id');
    }
}
