import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {WorkersComponent} from './workers/workers.component';
import {ChildrenComponent} from './children/children.component';
import {FoodComponent} from './food/food.component';
import {CampListComponent} from './camp-list/camp-list.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {CampComponent} from './camp/camp.component';
import {CreateCampComponent} from './create-camp/create-camp.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {AddWorkerComponent} from './add-worker/add-worker.component';
import {CopyWorkersComponent} from './copy-workers/copy-workers.component';


const routes: Routes = [
  {path: '', redirectTo: 'camp-list', pathMatch: 'full'},
  {path: 'camp-list', component: CampListComponent},
  {path: 'create-camp', component: CreateCampComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'camp/:id', component: CampComponent, children: [
      {path: '', redirectTo: 'detail', pathMatch: 'full'},
      {path: 'detail', component: DetailComponent},
      {path: 'workers', component: WorkersComponent},
      {path: 'children', component: ChildrenComponent},
      {path: 'food', component: FoodComponent},
      {path: 'schedule', component: ScheduleComponent},
      {path: 'add-worker', component: AddWorkerComponent},
      {path: 'copy-workers', component: CopyWorkersComponent}
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

