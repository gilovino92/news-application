import { Component, OnInit } from '@angular/core';
import { TopHeadlinesService } from 'src/app/data/services/top-headlines/top-headlines.service';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.component.html',
  styleUrls: ['./top-headlines.component.scss']
})
export class TopHeadlinesComponent implements OnInit {
  topHeadlines = [];
  constructor(private topHeadlinesService: TopHeadlinesService) {}
  ngOnInit(): void {
    
    this.topHeadlinesService
      .getAll({
        params: {
          country: "us",
        },
      })
      .subscribe((res:any) => {
        this.topHeadlines = res.articles;
      });
  }
}
