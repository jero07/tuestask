import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { RouterModule } from '@angular/router';
import { TaskComponent } from 'src/app/components/task/task.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
@NgModule({
  declarations: [MainComponent, HomeComponent, TaskComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    SharedModule
  ],
  exports: []
})
export class MainModule { }
