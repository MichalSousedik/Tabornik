import {Component, OnInit} from '@angular/core';
import {CampService} from '../../service/camp.service';
import {Camp} from '../../model/camp';
import {ChildService} from '../../service/child.service';
import {MenuService} from '../../service/menu.service';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../structure/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-camp-list',
    templateUrl: './camp-list.component.html',
    styleUrls: ['./camp-list.component.css']
})
export class CampListComponent implements OnInit {

    camps: Camp[];

    constructor(private campService: CampService,
                private childService: ChildService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.campService.getUserCamps().subscribe(camps => this.camps = camps);
    }

    removeCamp(id: number, event) {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: 'Opravdu chcete smazat tento tábor?'});
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.campService.removeCamp(id);
            }
        });
        event.stopPropagation();
    }

    getChildrenCount(id: number) {
        return this.childService.getChildrenN().filter(child => child.campIds.some(campId => campId === id)).length;
    }
}
