import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import News from '../data/models/news.model';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsModule,
    HomeModule
  ],
  exports: [News, HomeModule]
})
export class ModulesModule { }
