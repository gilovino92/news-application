import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EventService } from 'src/app/core/services/event-service/event.service';

@Injectable({
  providedIn: "root",
})
export class ApiService extends EventService{
  private _api = environment.baseUrl;

  protected get api() {
    return this._api;
  }

  protected set api(endpoint) {
    this._api += endpoint;
  }

  constructor(protected http: HttpClient) {
    super();
  }

  getApiUrl() {
      return this.api;
  }

}
