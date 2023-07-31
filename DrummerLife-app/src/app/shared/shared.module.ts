import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { EmailDirective } from "../user/validators/email.directive";

// import { EmailDirective } from "../user/validators/email.directive";
import { LoaderComponent } from "./loader/loader.component";

// @NgModule({
//   declarations: [LoaderComponent, EmailDirective],
//   imports: [CommonModule],
//   exports: [LoaderComponent, EmailDirective],
// })
// export class SharedModule {}

@NgModule({
    declarations: [LoaderComponent],
    imports: [CommonModule],
    exports: [LoaderComponent],
  })
  export class SharedModule {}