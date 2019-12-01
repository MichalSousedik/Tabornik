import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './structure/header/header.component';
import {SideMenuComponent} from './structure/side-menu/side-menu.component';
import {AppRoutingModule} from './app-routing.module';
import {DetailComponent} from './camp-related/detail/detail.component';
import {WorkersComponent} from './worker-related/workers/workers.component';
import {ChildrenComponent} from './child-related/children/children.component';
import {FoodComponent} from './food-related/food/food.component';
import {CampListComponent} from './camp-related/camp-list/camp-list.component';
import {NotificationsComponent} from './not-relevant/notifications/notifications.component';
import {CampComponent} from './camp-related/camp/camp.component';
import {CreateCampComponent} from './camp-related/create-camp/create-camp.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ScheduleComponent} from './not-relevant/schedule/schedule.component';
import {PendingWorkersComponent} from './worker-related/pending-workers/pending-workers.component';
import {AcceptedWorkersComponent} from './worker-related/accepted-workers/accepted-workers.component';
import {AddWorkerComponent} from './worker-related/add-worker/add-worker.component';
import {CopyWorkersComponent} from './worker-related/copy-workers/copy-workers.component';
import {MatAutocompleteModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditWorkerComponent} from './worker-related/edit-worker/edit-worker.component';
import {SearchCampComponent} from './not-relevant/search-camp/search-camp.component';
import {EditChildComponent} from './child-related/edit-child/edit-child.component';
import {CopyChildrenComponent} from './child-related/copy-children/copy-children.component';
import {AddChildComponent} from './child-related/add-child/add-child.component';
import {FoodDetailComponent} from './food-related/food-detail/food-detail.component';
import {ReadableDate} from './pipe/readable-date';
import { EditFoodDetailComponent } from './food-related/edit-food-detail/edit-food-detail.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { AddFoodDetailComponent } from './food-related/add-food-detail/add-food-detail.component';
import { CopyFoodComponent } from './food-related/copy-food/copy-food.component';
import { ConfirmDialogComponent } from './structure/confirm-dialog/confirm-dialog.component';


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
        AddChildComponent,
        FoodDetailComponent,
        ReadableDate,
        EditFoodDetailComponent,
        AddFoodDetailComponent,
        CopyFoodComponent,
        ConfirmDialogComponent
    ],
    entryComponents: [EditWorkerComponent, EditChildComponent, EditFoodDetailComponent, ConfirmDialogComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatSelectModule,
        NgxMatSelectSearchModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
