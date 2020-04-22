import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from "./../../../core/services/user-service/user.service";
import { Component, OnInit, Input } from "@angular/core";
import {
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
} from "@angular/forms";
import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  @Input() user;
  selected = null;
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
  profileForm = this.fb.group({
    username: [
      "",
      [
        Validators.required,
        forbiddenNameValidator(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g),
      ],
    ],
    preference: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private modal:NgbActiveModal) {
    
  }

  get username() {
    return this.profileForm.get("username");
  }
  get preference() {
    return this.profileForm.get("preference");
  }

  ngOnInit(): void {
    if(this.user) {
      this.username.setValue(this.user.username);
      this.preference.setValue(this.user.data);
    }
  }

  changeOptions(e) {
    console.log(this.profileForm.get("preference"));
  }
  onSubmit() {
    console.log(this.profileForm);
    this.userService.registerNewUser({
      username: this.profileForm.get("username").value,
      data: this.profileForm.get("preference").value,
    });
    this.userService.broadcast(UserService.NEW_USER, true);
    this.modal.dismiss('done');
  }
}
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
