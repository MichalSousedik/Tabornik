import {Detail} from './detail';
import {User} from './user';

export class Camp {
  id: number;
  capacity: number;
  occupied: number;
  detail: Detail;
  workers: User[];
  pendings: User[];
}
