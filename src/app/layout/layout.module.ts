import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MainContentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [HeaderComponent, FooterComponent, MainContentComponent]
})
export class LayoutModule { }
