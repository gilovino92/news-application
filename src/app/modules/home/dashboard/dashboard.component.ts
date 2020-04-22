import { Component, OnInit } from "@angular/core";
import { TopHeadlinesService } from "src/app/data/services/top-headlines/top-headlines.service";
import News from "src/app/data/models/news.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private topHeadlinesService: TopHeadlinesService) {}
  ngOnInit(): void {
  }
}
