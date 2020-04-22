import { UserService } from "./../../../../core/services/user-service/user.service";
import { NewsService } from "./../../../../data/services/news/news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-preferences",
  templateUrl: "./my-preferences.component.html",
  styleUrls: ["./my-preferences.component.scss"],
})
export class MyPreferencesComponent implements OnInit {
  newsList = [];
  $newListObservable;
  categories = [
    {
      title: "Bitcoin",
      value: "bitcoin",
    },
    {
      title: "Apple",
      value: "apple",
    },
    {
      title: "Earthquake",
      value: "earthquake",
    },
    {
      title: "Animal",
      value: "animal",
    },
  ];
  myChoice = { option: "" };
  constructor(
    private newsService: NewsService,
    private userService: UserService
  ) {
    this.getCurrentUserPrefer();
    this.userService.on(UserService.NEW_USER, () => {
      this.getCurrentUserPrefer();
      this.getNews();
    });
  }

  ngOnInit(): void {
    this.getNews();
  }
  getCurrentUserPrefer() {
    const profile = this.userService.currenUser;
    if (!profile) {
      this.myChoice.option = "bitcoin";
    } else {
      this.myChoice.option = profile.data;
    }
  }
  getNews() {
    this.newsList = [];
    this.$newListObservable = this.newsService.getByCat(this.myChoice.option);
    this.$newListObservable.subscribe((res) => {
      this.newsList = res.articles;
    });
  }

  myChange(value) {
    if (value === this.myChoice.option) {
      return;
    }
    this.myChoice.option = value;
    this.getNews();
  }
}
