import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiService } from "./../api.service";
import { Injectable } from "@angular/core";
import News from "../../models/news.model";
import { catchError, map } from "rxjs/operators";
import { of } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class NewsService extends ApiService {
  api = "/everything";
  constructor(http: HttpClient) {
    super(http);
  }
  getByCat(keyword) {
    const options = { params: { q: keyword } };
    return this.http.get<News[]>(this.api, options).pipe(
      map((response: any) => {
        response.articles = [...response.articles].map((data) =>
          new News().deserialize(data)
        );
        return response;
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err.status, err.error.message);
        return of([]);
      })
    );
  }
}
