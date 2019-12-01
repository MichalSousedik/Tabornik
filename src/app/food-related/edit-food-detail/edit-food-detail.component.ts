import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ReplaySubject, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {MenuService} from '../../service/menu.service';
import {MenuItem} from '../../model/menu-item';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {FoodDetail} from '../../model/food-detail';

@Component({
    selector: 'app-edit-food-detail',
    templateUrl: './edit-food-detail.component.html',
    styleUrls: ['./edit-food-detail.component.css']
})
export class EditFoodDetailComponent implements OnInit, OnDestroy {

    showAddDrink = false;
    showAddFood = false;

    /** Subject that emits when the component has been destroyed. */
    protected _onDestroy = new Subject<void>();

    protected foodItems: MenuItem[];
    public foodCtrl: FormControl = new FormControl();
    public foodFilterCtrl: FormControl = new FormControl();
    public filteredFoods: ReplaySubject<MenuItem[]> = new ReplaySubject<MenuItem[]>(1);

    protected drinkItems: MenuItem[];
    public drinkCtrl: FormControl = new FormControl();
    public drinkFilterCtrl: FormControl = new FormControl();
    public filteredDrinks: ReplaySubject<MenuItem[]> = new ReplaySubject<MenuItem[]>(1);

    filterFoodNone = false;
    filterDrinkNone = false;
    preFilledName: string;
    preFilledDrinkName: string;

    constructor(private menuService: MenuService,
                public dialog: MatDialog,
                @Inject(MAT_DIALOG_DATA) public data: FoodDetail) {
    }

    ngOnInit() {

        this.foodItems = this.menuService.getFoods();
        // set initial selection
        this.foodCtrl.setValue(this.getCampMenu(this.data.food));

        // load the initial bank list
        this.filteredFoods.next(this.foodItems.slice());

        // listen for search field value changes
        this.foodFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterFoods();
            });

        this.drinkItems = this.menuService.getDrinks();
        // set initial selection
        this.drinkCtrl.setValue(this.getCampMenu(this.data.drink));

        // load the initial bank list
        this.filteredDrinks.next(this.drinkItems.slice());

        // listen for search field value changes
        this.drinkFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterDrinks();
            });
    }


    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    protected filterFoods() {
        if (!this.foodItems) {
            return;
        }
        // get the search keyword
        let search = this.foodFilterCtrl.value;
        if (!search) {
            this.filteredFoods.next(this.foodItems.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredFoods.next(
            this.foodItems.filter(foodItem => foodItem.name.toLowerCase().indexOf(search) > -1)
        );

        this.filteredFoods.subscribe(f => {
            if (f.length === 0) {
                this.filterFoodNone = true;
                this.preFilledName = search;
            } else {
                this.filterFoodNone = false;
            }
        });
    }

    protected filterDrinks() {
        if (!this.drinkItems) {
            return;
        }
        // get the search keyword
        let search = this.drinkFilterCtrl.value;
        if (!search) {
            this.filteredDrinks.next(this.drinkItems.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the banks
        this.filteredDrinks.next(
            this.drinkItems.filter(foodItem => foodItem.name.toLowerCase().indexOf(search) > -1)
        );


        this.filteredDrinks.subscribe(f => {
            if (f.length === 0) {
                this.filterDrinkNone = true;
                this.preFilledDrinkName = search;
            } else {
                this.filterDrinkNone = false;
            }
        });
    }

    getCampMenu(id: number) {
        if (id !== undefined) {
            return this.menuService.getMenuItem(id);
        }
    }

    addFood() {
        this.showAddFood = true;
    }

    addDrink() {
        this.showAddDrink = true;
    }

    getFoodDetail() {
        let foodId, drinkId;
        if (this.foodCtrl.value !== undefined) {
            foodId = this.foodCtrl.value.id;
        }
        if (this.drinkCtrl.value !== undefined) {
            drinkId = this.drinkCtrl.value.id;
        }



        return new FoodDetail(this.data.type, foodId, drinkId);
    }

    getType() {
        if (this.showAddDrink) {
            return 'pití';
        } else {
            return 'jídlo';
        }
    }

    create(menuItem: MenuItem) {
        if (menuItem) {
            menuItem.food = this.showAddFood;
            menuItem.id = this.menuService.addMenuItem(menuItem);
            if (this.showAddDrink) {
                this.drinkItems = this.menuService.getDrinks();
                this.filteredDrinks.next(this.drinkItems.slice());
                this.drinkCtrl.setValue(menuItem);
            } else {
                this.foodItems = this.menuService.getFoods();
                this.filteredFoods.next(this.foodItems.slice());
                this.foodCtrl.setValue(menuItem);
            }

        }
        this.showAddDrink = false;
        this.showAddFood = false;
        this.preFilledDrinkName = '';
        this.preFilledName = '';
    }

    addWithoutPreFilledFood() {
        this.preFilledName = '';
        this.addFood();
    }

    addWithoutPreFilledDrink() {
        this.preFilledDrinkName = '';
        this.addDrink();
    }
}
