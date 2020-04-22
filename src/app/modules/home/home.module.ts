import { NewsModule } from './../news/news.module';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopHeadlinesComponent } from './top-headlines/top-headlines/top-headlines.component';
import { MyPreferencesComponent } from './my-preferences/my-preferences/my-preferences.component';

const routes = [ {
    path: '',
    component: DashboardComponent
  }];

@NgModule({
  declarations: [DashboardComponent, TopHeadlinesComponent, MyPreferencesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    NewsModule
  ],
  exports: [RouterModule]
})
export class HomeModule { }
