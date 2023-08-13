import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './pages/data/data.component';
import { ReportComponent } from './pages/report/report.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'data',
    component: DataComponent
  },
    {
    path: 'report',
    component: ReportComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
