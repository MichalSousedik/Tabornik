import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from '../../model/menu-item';
import {Ingredient} from '../../model/ingredient';
import {MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../../structure/confirm-dialog/confirm-dialog.component';

@Component({
    selector: 'app-add-food-detail',
    templateUrl: './add-food-detail.component.html',
    styleUrls: ['./add-food-detail.component.css']
})
export class AddFoodDetailComponent implements OnInit {

    @Input() type: string;
    @Input() preFilledName: string;
    @Output() create: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
    menuItem: MenuItem = {name: '', food: false, id: 0, ingredients: []};
    ingredient: Ingredient = new Ingredient();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        this.menuItem.name = this.preFilledName;
    }

    add() {
        if (this.ingredient.amount !== '' || this.ingredient.name !== '') {
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: 'Nepřidali jste ingredienci do seznamu ingrediencí. Máme tak učinit za Vás?'});
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.menuItem.ingredients.push(this.ingredient);
                }
            });
        }
        this.create.emit(this.menuItem);
    }

    close() {
        this.create.emit(undefined);
    }

    addIngredient() {
        this.menuItem.ingredients.push(this.ingredient);
        this.ingredient = new Ingredient();
    }
}
