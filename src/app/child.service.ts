import {Injectable} from '@angular/core';
import {Child} from './child';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChildService {

    private nextChildId = 4;

    children: Child[] = [
        {
            name: 'Patrik Dobis', age: 10, contact: '733533211', id: 1, nickname: 'Dob', representative: 'Petr Dvorak',
            campIds: [1], paids: [true]
        },
        {
            name: 'Jiri Andrs', age: 11, contact: '733533221', id: 2, nickname: 'Andy', representative: 'Karel Treti',
            campIds: [1], paids: [false]
        },
        {
            name: 'Tomas Andrs', age: 9, contact: '930222001', id: 3, nickname: 'ABoy', representative: 'Karel Treti',
            campIds: [], paids: []
        }
    ];


    constructor() {
    }

    getChildren(): Observable<Child[]> {
        return of(this.children);
    }

    getChildrenN(): Child[] {
        return this.children;
    }

    createChild(child: Child) {
        child.id = this.nextChildId++;
        this.children.push(child);
    }

    addChildToCamp(childId: number, campId: number) {
        const ch = this.children.find(child => child.id === childId);
        ch.campIds.push(campId);
        ch.paids.push(false);
    }

    removeChildFromCamp(childId: number, campId: number) {
        const ch = this.children.find(child => child.id === childId);
        const index = ch.campIds.findIndex(i => i === campId);
        ch.campIds.splice(index, 1);
        ch.paids.splice(index, 1);
    }

    validateChild(childId: number, campId: number) {
        const ch = this.children.find(child => child.id === childId);
        const index = ch.campIds.findIndex(i => i === campId);
        ch.paids[index] = true;
    }
}
