import {Component, OnInit} from '@angular/core';
import {CampMenu} from '../../model/camp-menu';
import {CampService} from '../../service/camp.service';
import {ActivatedRoute} from '@angular/router';
import {MenuService} from '../../service/menu.service';
import {FoodDetail} from '../../model/food-detail';
import {MatDialog} from '@angular/material';
import {EditFoodDetailComponent} from '../edit-food-detail/edit-food-detail.component';

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.css']
})
export class FoodDetailComponent implements OnInit {

    campMenu: CampMenu;
    foodDetails: FoodDetail[] = [];

    constructor(private campService: CampService,
                private route: ActivatedRoute,
                private menuService: MenuService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.campService.getCampMenu(this.getCampId(), this.getCampMenuDate()).subscribe(
            campMenu => {
                this.campMenu = campMenu;
                this.foodDetails.push(new FoodDetail('Snídaně', campMenu.breakfastFood, campMenu.breakfastDrink));
                this.foodDetails.push(new FoodDetail('Dopolední svačina', campMenu.snackLowFood, campMenu.snackLowDrink));
                this.foodDetails.push(new FoodDetail('Oběd', campMenu.lunchFood, campMenu.lunchDrink));
                this.foodDetails.push(new FoodDetail('Odpolední svačina', campMenu.snackHighFood, campMenu.snackHighDrink));
                this.foodDetails.push(new FoodDetail('Večeře', campMenu.dinnerFood, campMenu.dinnerDrink));
            }
        );
    }

    getCampId(): number {
        return +this.route.parent.snapshot.paramMap.get('id');
    }


    private getCampMenuDate() {
        return this.route.snapshot.paramMap.get('date');
    }

    getCampMenuName(id: number) {
        if (id !== undefined) {
            return this.menuService.getMenuItem(id).name;
        }
    }

    edit(foodDetail: FoodDetail) {
        const dialogRef = this.dialog.open(EditFoodDetailComponent, {data: foodDetail});
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const d = this.foodDetails.find(detail => detail.type === result.type);
                d.food = result.food;
                d.drink = result.drink;
                switch (result.type) {
                    case 'Snídaně':
                        this.campMenu.breakfastFood = result.food;
                        this.campMenu.breakfastDrink = result.drink;
                        break;
                    case 'Dopolední svačina':
                        this.campMenu.snackLowFood = result.food;
                        this.campMenu.snackLowDrink = result.drink;
                        break;
                    case 'Oběd':
                        this.campMenu.lunchFood = result.food;
                        this.campMenu.lunchDrink = result.drink;
                        break;
                    case 'Odpolední svačina':
                        this.campMenu.snackHighFood = result.food;
                        this.campMenu.snackHighDrink = result.drink;
                        break;
                    case 'Večeře':
                        this.campMenu.dinnerFood = result.food;
                        this.campMenu.dinnerDrink = result.drink;
                        break;
                }
                this.campService.editCampMenu(this.campMenu, this.getCampId());
            }
        });
    }
}
