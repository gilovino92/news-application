import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ApiService } from "./../api.service";
import { Injectable } from "@angular/core";
import { catchError, map} from "rxjs/operators";
import {Observable, of } from "rxjs";
import News from "../../models/news.model";

@Injectable({
  providedIn: "root",
})
export class TopHeadlinesService extends ApiService {
  static FETCHED = 'fetched';
  api = "/top-headlines";
  country = 'vn';

  constructor(http: HttpClient) {
    super(http);
  }
  
  getAll(options): Observable<News[]> {
    return this.http.get<News[]>(this.api, options).pipe(
      map((response: any) => {
        response.articles = [...response.articles].map((data) => new News().deserialize(data));
        return response;
      }),
      catchError((err: HttpErrorResponse) => {
        console.log(err.status, err.error.message);
        return of([]);
      })
    );
  }
}
