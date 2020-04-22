import { EventService } from './../event-service/event.service';
import { Injectable } from "@angular/core";
import User from "src/app/data/models/user.model";

@Injectable({
  providedIn: "root",
})
export class UserService extends EventService{
  static NEW_USER = "new_user_created";
  get currenUser(): any {
    if (!localStorage.getItem("user")) {
      return false;
    }
    return JSON.parse(localStorage.getItem("user"));
  }

  constructor() {
    super();
  }

  registerNewUser(userData) {
    localStorage.setItem("user", JSON.stringify(userData));
  }
}
