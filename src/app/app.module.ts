import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './pages/report/report.component';
import { DataComponent } from './pages/data/data.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    DataComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
