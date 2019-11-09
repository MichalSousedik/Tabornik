import {Injectable} from '@angular/core';
import {MenuItem} from '../model/menu-item';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private menuItemNextId = 6;

    private menuItems: MenuItem[] = [
        {
            id: 1, name: 'Rohlik, máslo, sýr, marmeláda', food: true,
            ingredients: [{name: 'rohlík', amount: '1 kus'}, {name: 'máslo', amount: '5 dag'}, {
                name: 'sýr',
                amount: '10 dag'
            }, {name: 'marmeláda', amount: '2 dag'}]
        },
        {
            id: 2, name: 'Černý čaj', food: false,
            ingredients: [{name: 'černý čaj', amount: '1 sáček'}]
        },
        {
            id: 3, name: 'Svíčková', food: true,
            ingredients: [{name: 'hovězí krk', amount: '10 dag'}, {name: 'knedlík', amount: '3 kusy'}, {
                name: 'paprika',
                amount: '0,5 kusu'
            }, {name: 'mrkev', amount: '0,5 kusu'}]
        },
        {
            id: 4, name: 'Rohlíky, paštika', food: true,
            ingredients: [{name: 'rohlík', amount: '1 kus'}, {name: 'paštika', amount: '1 kus'}]
        },
        {
            id: 5, name: 'Voda', food: false,
            ingredients: []
        }
    ];

    constructor() {
    }

    addMenuItem(menuItem: MenuItem): number {
        menuItem.id = this.menuItemNextId++;
        this.menuItems.push(menuItem);
        return menuItem.id;
    }

    getMenuItems(ids: number[]): Observable<MenuItem[]> {
        return of(this.menuItems.filter(menuItem => ids.some(id => id === menuItem.id)));
    }

    getMenuItem(id: number): MenuItem {
        return this.menuItems.find(menuItem => menuItem.id === id);
    }

    getFoods(): MenuItem[] {
        return this.menuItems.filter(menuItem => menuItem.food);
    }

    getDrinks(): MenuItem[] {
        return this.menuItems.filter(menuItem => !menuItem.food);
    }

}
