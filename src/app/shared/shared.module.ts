import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MartialModulesModule } from "./martial-modules/martial-modules.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxLoadingModule } from "ngx-loading";
import { ReadmorePipe } from './readmore.pipe';
import { RegisterComponent } from './register/register/register.component';

@NgModule({
  declarations: [ReadmorePipe, RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MartialModulesModule,
    NgbModule,
    NgxLoadingModule,
  ],
  entryComponents: [RegisterComponent],
  exports: [MartialModulesModule, NgbModule, FormsModule, NgxLoadingModule, ReadmorePipe,RegisterComponent],
})
export class SharedModule {}
