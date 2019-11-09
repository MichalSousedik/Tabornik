import {Component, OnInit} from '@angular/core';
import {CampMenu} from '../../model/camp-menu';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../../service/menu.service';

@Component({
    selector: 'app-food',
    templateUrl: './food.component.html',
    styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

    campMenus: CampMenu[];

    constructor(public campService: CampService,
                private route: ActivatedRoute,
                private router: Router,
                private menuService: MenuService) {
    }

    ngOnInit() {
        this.campService.getCampMenus(this.getCampId()).subscribe(
            campMenus => this.campMenus = campMenus
        );
    }

    getCampId() {
        return +this.route.parent.snapshot.paramMap.get('id');
    }

    getCampMenuName(id: number) {
        if (id !== undefined) {
            return this.menuService.getMenuItem(id).name;
        }
    }

    edit(date: string) {
        this.router.navigate(['../food-detail/' + date], {relativeTo: this.route});
    }

    alert(s: string) {
        alert(s);
    }
}
