import { SharedModule } from './../../shared/shared.module';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsListComponent } from "./news-list/news-list.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { NewsItemComponent } from "./news-item/news-item.component";

@NgModule({
  declarations: [NewsListComponent, NewsDetailsComponent, NewsItemComponent],
  entryComponents: [NewsDetailsComponent],
  imports: [CommonModule, SharedModule],
  exports: [NewsListComponent, NewsDetailsComponent, NewsItemComponent],
})
export class NewsModule {}
