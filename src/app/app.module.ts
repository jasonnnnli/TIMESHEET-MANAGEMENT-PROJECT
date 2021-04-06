import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewportComponent } from './misc-components/main-viewport/main-viewport.component';
import { NavbarComponent } from './misc-components/navbar/navbar.component';
import { PrespacePipePipe } from './prespace-pipe.pipe';
import { LoginComponent } from './misc-components/login/login.component';
import { UserListComponent } from './list-components/user-list/user-list.component';
import { UserDetailComponent } from './detail-components/user-detail/user-detail.component';
import { LocationListComponent } from './list-components/location-list/location-list.component';
import { LocationDetailComponent } from './detail-components/location-detail/location-detail.component';
import { TimecardListComponent } from './list-components/timecard-list/timecard-list.component';
import { TimecardDetailComponent } from './detail-components/timecard-detail/timecard-detail.component';
import { Error404Component } from './misc-components/error404/error404.component';
import { AdminSidebarComponent } from './sidebar-components/admin-sidebar/admin-sidebar.component';
import { TimesheetSidebarComponent } from './sidebar-components/timesheet-sidebar/timesheet-sidebar.component';
import { ReportSidebarComponent } from './sidebar-components/report-sidebar/report-sidebar.component';
import { ReportComponent } from './list-components/report-list/report.component';
import { UserNewComponent } from './new-components/user-new/user-new.component';
import { LocationNewComponent } from './new-components/location-new/location-new.component';
import { TimecardNewComponent } from './new-components/timecard-new/timecard-new.component';


@NgModule({
  declarations: [
    AppComponent,
    MainViewportComponent,
    NavbarComponent,
    PrespacePipePipe,
    LoginComponent,
    UserListComponent,
    UserDetailComponent,
    LocationListComponent,
    LocationDetailComponent,
    TimecardListComponent,
    TimecardDetailComponent,
    Error404Component,
    AdminSidebarComponent,
    TimesheetSidebarComponent,
    ReportSidebarComponent,
    ReportComponent,
    UserNewComponent,
    LocationNewComponent,
    TimecardNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
