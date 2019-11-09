import {Component, OnInit} from '@angular/core';
import {Camp} from '../../model/camp';
import {CampService} from '../../service/camp.service';
import {Router} from '@angular/router';
import {Detail} from '../../model/detail';
import {CampMenu} from '../../model/camp-menu';

@Component({
    selector: 'app-create-camp',
    templateUrl: './create-camp.component.html',
    styleUrls: ['./create-camp.component.css']
})
export class CreateCampComponent implements OnInit {

    camp: Camp = {id: 0, capacity: 0, occupied: 0, detail: new Detail(), workers: [], pendings: [], menus: []};

    constructor(private campService: CampService,
                private router: Router) {
    }

    ngOnInit() {
    }

    createCamp() {
        const menus = [];
        const start = this.campService.getDay(this.camp.detail.startDate);
        const startMonth = this.campService.getMonth(this.camp.detail.startDate);
        const startYear = this.campService.getYear(this.camp.detail.startDate);
        const end = this.campService.getDay(this.camp.detail.endDate);
        for (let i = start; i <= end; i++) {
            menus.push({date: startYear + '-' + startMonth + '-' + i});
        }
        this.camp.menus = menus;
        this.campService.addCamp(this.camp);
        this.router.navigate(['/camp-list']);
    }

}
