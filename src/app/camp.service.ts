import { Injectable } from '@angular/core';
import {Camp} from './camp';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';
import {User} from './user';
import {p} from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CampService {

  private nextId = 3;

  private userCamps: Camp[] = [
    {id: 1, capacity: 10, occupied: 9, detail:
        {name: 'Tábor U Dubu',
          leader: 'Petr Janke',
          medic: 'Honza Karel',
          address: 'U Vejtopu 15',
          backup: 'Tomáš Petr',
          startDate: '2019-11-17',
          endDate: '2019-11-17'},
    workers: [
      {id: 1, name: 'Petr Kadlec', age: 25, nickname: 'Kadli', position: 'Vedoucí'},
      {id: 2, name: 'Josef Novák', age: 20, nickname: 'Pepis', position: 'Kuchař'},
      {id: 3, name: 'Martin Patek', age: 25, nickname: 'Koudelka', position: 'Zástupce vedoucího'}
      ],
    pendings: [
      {id: 4, name: 'Karel Tomek', age: 18, nickname: 'Toms'},
      {id: 5, name: 'Lubomir Krajik', age: 20, nickname: 'Lubic'}
    ]},
    {id: 2, capacity: 16, occupied: 2, detail:
        {name: 'Pěnkava',
          leader: 'Petr Janke',
          medic: 'Honza Karel',
          address: 'U Vejtopu 15',
          backup: 'Tomáš Petr',
          startDate: '2019-11-17',
          endDate: '2019-11-17'},
      workers: [
        {id: 1, name: 'Karel Netrda', age: 25, nickname: 'Kadli', position: 'Vedoucí'},
        {id: 2, name: 'Janek Werich', age: 20, nickname: 'Pepis', position: 'Kuchař'},
        {id: 3, name: 'Barbora Kopova', age: 25, nickname: 'Koudelka', position: 'Zástupce vedoucího'}
      ],
      pendings: [
      ]}
  ];

  constructor() { }

  getDifferentCamps(campId: number): Observable<Camp[]> {
    return of(this.userCamps.filter(camp => camp.id !== campId));
  }

  getUserCamps(): Observable<Camp[]> {
    return of(this.userCamps);
  }

  getCamp(id: number): Observable<Camp> {
    return of(this.userCamps.find(camp => camp.id === id));
  }

  addCamp(camp: Camp) {
    camp.id = this.nextId++;
    this.userCamps.push(camp);
  }

  removeCamp(id: number) {
    const index = this.userCamps.findIndex(camp => camp.id === id);
    this.userCamps.splice(index, 1);
  }

  getPendings(id: number): Observable<User[]> {
    return of(this.userCamps.find(camp => camp.id === id).pendings);
  }

  getWorkers(id: number): Observable<User[]> {
    return of(this.userCamps.find(camp => camp.id === id).workers);
  }

  addPendingToWorkers(pendingId: number, campId: number) {
    const pendingN = this.getPendingN(campId, pendingId);
    this.getWorkersN(campId).push(pendingN);
    this.removePending(pendingId, campId);
  }

  removePending(pendingId: number, campId: number) {
    const index = this.getPendingsN(campId).findIndex(pending => pending.id === pendingId);
    this.getPendingsN(campId).splice(index, 1);
  }

  getWorkersN(campId: number) {
    return this.userCamps.find(camp => camp.id === campId).workers;
  }

  getPendingsN(campId: number) {
    return this.userCamps.find(camp => camp.id === campId).pendings;
  }

  getPendingN(campId: number, pendingId: number) {
    return this.getPendingsN(campId).find(pending => pending.id === pendingId);
  }

  removeWorker(workerId: number, campId: number) {
    const index = this.getWorkersN(campId).findIndex(worker => worker.id === workerId);
    this.getWorkersN(campId).splice(index, 1);
  }

  addWorker(worker: User, campId: number) {
    this.getWorkersN(campId).push(worker);
  }
}
