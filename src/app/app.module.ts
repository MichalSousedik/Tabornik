import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {AppRoutingModule} from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { WorkersComponent } from './workers/workers.component';
import { ChildrenComponent } from './children/children.component';
import { FoodComponent } from './food/food.component';
import { CampListComponent } from './camp-list/camp-list.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { CampComponent } from './camp/camp.component';
import { CreateCampComponent } from './create-camp/create-camp.component';
import {FormsModule} from '@angular/forms';
import { ScheduleComponent } from './schedule/schedule.component';
import { PendingWorkersComponent } from './pending-workers/pending-workers.component';
import { AcceptedWorkersComponent } from './accepted-workers/accepted-workers.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { CopyWorkersComponent } from './copy-workers/copy-workers.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditWorkerComponent } from './edit-worker/edit-worker.component';
import { SearchCampComponent } from './search-camp/search-camp.component';
import { EditChildComponent } from './edit-child/edit-child.component';
import { CopyChildrenComponent } from './copy-children/copy-children.component';
import { AddChildComponent } from './add-child/add-child.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    DetailComponent,
    WorkersComponent,
    ChildrenComponent,
    FoodComponent,
    CampListComponent,
    NotificationsComponent,
    CampComponent,
    CreateCampComponent,
    ScheduleComponent,
    PendingWorkersComponent,
    AcceptedWorkersComponent,
    AddWorkerComponent,
    CopyWorkersComponent,
    EditWorkerComponent,
    SearchCampComponent,
    EditChildComponent,
    CopyChildrenComponent,
    AddChildComponent
  ],
  entryComponents: [ EditWorkerComponent, EditChildComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
