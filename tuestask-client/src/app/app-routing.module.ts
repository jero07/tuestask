import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { MainComponent } from './layout/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'task', component: TaskComponent },
      { path: 'report', component: ReportComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
