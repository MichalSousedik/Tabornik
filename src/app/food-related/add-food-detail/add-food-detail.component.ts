import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from '../../model/menu-item';
import {Ingredient} from '../../model/ingredient';

@Component({
  selector: 'app-add-food-detail',
  templateUrl: './add-food-detail.component.html',
  styleUrls: ['./add-food-detail.component.css']
})
export class AddFoodDetailComponent implements OnInit {

  @Input() type: string;
  @Output() create: EventEmitter<MenuItem> = new EventEmitter<MenuItem>();
  menuItem: MenuItem = { name: '', food: false, id: 0, ingredients: []};
  ingredient: Ingredient = new Ingredient();

  constructor() { }

  ngOnInit() {
  }

  add() {
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
