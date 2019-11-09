import {Component, OnInit} from '@angular/core';
import {Camp} from '../../model/camp';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {CampMenu} from '../../model/camp-menu';
import {MenuService} from '../../service/menu.service';

@Component({
    selector: 'app-copy-food',
    templateUrl: './copy-food.component.html',
    styleUrls: ['./copy-food.component.css']
})
export class CopyFoodComponent implements OnInit {

    camps: Camp[];
    campMenus: CampMenu[] = [];
    campId: number;

    constructor(private campService: CampService,
                private menuService: MenuService,
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

    campChanged() {
        this.campMenus = JSON.parse(JSON.stringify(this.campService.getCampMenusN(+this.campId)));
        const oldCampMenus = this.campService.getCampMenusN(this.getCampId());
        if (this.campMenus.length >= oldCampMenus.length) {
            let k = 0;
            for (let i = 0; i < this.campMenus.length; i++) {
                if (k === oldCampMenus.length) {
                    this.campMenus.splice(k, this.campMenus.length - k);
                    break;
                }
                this.campMenus[i].date = oldCampMenus[k++].date;
            }
        } else {
            let k = 0;
            let l = 0;
            for (let i = 0; i < oldCampMenus.length; i++) {
                if (i >= this.campMenus.length) {
                    if (k++ >= this.campMenus.length) {
                        k = 0;
                        l = 0;
                    }
                    this.campMenus.push(JSON.parse(JSON.stringify(this.campMenus[l++])));
                }
                this.campMenus[i].date = oldCampMenus[i].date;

            }
        }
    }

    copy() {
        this.campMenus.forEach(campMenu => this.campService.editCampMenu(campMenu, this.getCampId()));
        this.router.navigate(['../food'], {relativeTo: this.route});
    }


    getCampMenuName(id: number) {
        if (id !== undefined) {
            return this.menuService.getMenuItem(id).name;
        }
    }
}
