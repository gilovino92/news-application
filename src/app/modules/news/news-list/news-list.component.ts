import { TopHeadlinesService } from "src/app/data/services/top-headlines/top-headlines.service";
import { Component, OnInit, Input } from "@angular/core";
import News from "src/app/data/models/news.model";

@Component({
  selector: "app-news-list",
  templateUrl: "./news-list.component.html",
  styleUrls: ["./news-list.component.scss"],
})
export class NewsListComponent implements OnInit {
  @Input()newsList: News[];
  constructor(private topHeadlinesService: TopHeadlinesService) {
    // this.topHeadlinesService.on(TopHeadlinesService.FETCHED, (data) => {
    //   this.newsList = data;
    // });
  }

  ngOnInit(): void {}
}
