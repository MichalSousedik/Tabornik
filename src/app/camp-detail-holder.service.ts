import { Injectable } from '@angular/core';
import {Detail} from './detail';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampDetailHolderService {

  constructor() { }

  private campDetail: Subject<Detail> = new Subject<Detail>();

  public setCampDetail(detail: Detail) {
    this.campDetail.next( detail );
  }

  public getCampDetail(): Observable<Detail> {
    return this.campDetail.asObservable();
  }
}
