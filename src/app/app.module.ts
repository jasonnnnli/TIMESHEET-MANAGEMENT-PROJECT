import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MockDataService } from './services/mock-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetTimecardComponent } from './components/get-timecard/get-timecard.component';
import { GetAdminComponent } from './components/get-admin/get-admin.component';
import { GetReportComponent } from './components/get-report/get-report.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTimeCardComponent } from './components/add-time-card/add-time-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GetTimecardComponent,
    GetAdminComponent,
    GetReportComponent,
    AddTimeCardComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
  providers: [
    MockDataService,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
