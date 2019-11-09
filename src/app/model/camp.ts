import {Detail} from './detail';
import {User} from './user';
import {MenuItem} from './menu-item';
import {CampMenu} from './camp-menu';

export class Camp {
  id: number;
  capacity: number;
  occupied: number;
  detail: Detail;
  workers: User[];
  pendings: User[];
  menus: CampMenu[] = [];
}
