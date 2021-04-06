import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTimeCardComponent } from './components/add-time-card/add-time-card.component';
import { GetAdminComponent } from './components/get-admin/get-admin.component';
import { GetReportComponent } from './components/get-report/get-report.component';
import { GetTimecardComponent } from './components/get-timecard/get-timecard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'timecard', component:GetTimecardComponent},
  {path: 'admin', component:GetAdminComponent},
  {path: 'report', component:GetReportComponent},
  {path: 'addTimecard', component:AddTimeCardComponent},
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
