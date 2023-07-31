import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { EmailDirective } from './validators/email.directive';
// import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EmailDirective
  ],
  imports: [
    CommonModule,
    // SharedModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
