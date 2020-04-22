import { Component, OnInit, Input } from "@angular/core";
import News from "src/app/data/models/news.model";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { NewsDetailsComponent } from "../news-details/news-details.component";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.scss"],
})
export class NewsItemComponent implements OnInit {
  @Input() news: News;
  closeResult = "";
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  viewDetail(news) {
    const modalRef = this.modalService.open(NewsDetailsComponent, {
      size: "lg",
      centered: true,
      windowClass: "detail-popup",
    });
    modalRef.componentInstance.news = news;
  }
}
