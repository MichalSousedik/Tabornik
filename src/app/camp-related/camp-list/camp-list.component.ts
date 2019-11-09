import {Component, OnInit} from '@angular/core';
import {CampService} from '../../service/camp.service';
import {Camp} from '../../model/camp';
import {ChildService} from '../../service/child.service';

@Component({
    selector: 'app-camp-list',
    templateUrl: './camp-list.component.html',
    styleUrls: ['./camp-list.component.css']
})
export class CampListComponent implements OnInit {

    camps: Camp[];

    constructor(private campService: CampService,
                private childService: ChildService) {
    }

    ngOnInit() {
        this.campService.getUserCamps().subscribe(camps => this.camps = camps);
    }

    removeCamp(id: number) {
        this.campService.removeCamp(id);
    }

    getChildrenCount(id: number) {
        return this.childService.getChildrenN().filter(child => child.campIds.some(campId => campId === id)).length;
    }
}
