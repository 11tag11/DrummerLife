import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { ALLOWED_DOMAINS_FOR_EMAIL } from '../constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  appEmailDomains = ALLOWED_DOMAINS_FOR_EMAIL;
  subscription!: Subscription;
  errMessage!: string;
  

  constructor(
    private titlePage: Title,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.titlePage.setTitle('Login page');
  }

  login(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;

    this.subscription = this.userService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(["/"]);
      },
      error: (err) => this.errMessage = err.error.message
    });
  }


  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


}



// import { Component } from '@angular/core';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

//   constructor(private userService: UserService, private router: Router) {}

//   login(email: string, password: string): void {
//     // ToDo: for now we are not handling the data
//     this.userService.login();
//     this.router.navigate(['/']);
//   }
// }
