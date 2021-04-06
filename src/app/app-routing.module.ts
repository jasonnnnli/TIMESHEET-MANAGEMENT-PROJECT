import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './detail-components/user-detail/user-detail.component';
import { UserListComponent } from './list-components/user-list/user-list.component';
import { UserNewComponent } from './new-components/user-new/user-new.component';
import { LocationDetailComponent } from './detail-components/location-detail/location-detail.component';
import { LocationListComponent } from './list-components/location-list/location-list.component';
import { LocationNewComponent } from './new-components/location-new/location-new.component';
import { TimecardListComponent } from './list-components/timecard-list/timecard-list.component';
import { TimecardDetailComponent } from './detail-components/timecard-detail/timecard-detail.component';
import { TimecardNewComponent } from './new-components/timecard-new/timecard-new.component';
import { LoginComponent } from './misc-components/login/login.component';
import { Error404Component } from './misc-components/error404/error404.component';
import { ReportComponent } from './list-components/report-list/report.component';




const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetailComponent },
  { path: 'users/new', component: UserNewComponent },
  { path: 'locations', component: LocationListComponent },
  { path: 'locations/new', component: LocationNewComponent },
  { path: 'locations/:id', component: LocationDetailComponent },
  { path: 'timecard', component: TimecardListComponent },
  { path: 'timecard/new', component: TimecardNewComponent },
  { path: 'timecard/:id', component: TimecardDetailComponent},
  { path: 'reports', component: ReportComponent },

  { path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
