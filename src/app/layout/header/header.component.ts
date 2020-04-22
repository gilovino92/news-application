import { UserService } from "./../../core/services/user-service/user.service";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit } from "@angular/core";
import { RegisterComponent } from "src/app/shared/register/register/register.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  public categories = ["bitcoin", "apple", "earthquake", "animal"];
  currentUser = null;
  constructor(private modal: NgbModal, private userService: UserService) {
    this.currentUser = this.userService.currenUser;
    this.userService.on(UserService.NEW_USER, () => {
      this.currentUser = this.userService.currenUser;
    });
  }

  ngOnInit(): void {}
  register() {
    const modalRef = this.modal.open(RegisterComponent, {
      centered: true,
      size: "md",
    });
    if (this.currentUser) {
      modalRef.componentInstance.user = this.currentUser;
    }
  }
}
