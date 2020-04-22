import { Component, OnInit, Input } from "@angular/core";
import News from "src/app/data/models/news.model";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "app-news-details",
  templateUrl: "./news-details.component.html",
  styleUrls: ["./news-details.component.scss"],
})
export class NewsDetailsComponent implements OnInit {
  @Input() news: News;
  constructor(public activeModal: NgbActiveModal){}

  ngOnInit(): void {}
}
