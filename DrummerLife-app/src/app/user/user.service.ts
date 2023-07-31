import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
// import { User } from '../../types/user';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserService implements OnDestroy {
    private user$$ = new BehaviorSubject<User | undefined>(undefined);
    public user$ = this.user$$.asObservable();
    subscription: Subscription

    user: User | undefined;

    get isLogged(): boolean {
        return !!this.user;
    }

    constructor(private http: HttpClient) {
        this.subscription = this.user$.subscribe((user) => {
            this.user = user;
        })
    }

    getProfile() {
        return this.http
            .get<User>('/api/users/profile', {})
            .pipe(tap((user) => this.user$$.next(user)));
    }


    login(email: string, password: string) {
        //tap listening for user
        return this.http
            .post<User>('/api/login', { email, password })
            .pipe(tap((user) => this.user$$.next(user)));
    }

    register(username: string, email: string, password: string, rePassword: string) {

        return this.http
            .post<User>('/api/register', { username, email, password })
            .pipe(tap((user) => this.user$$.next(user)));

    }

    logout() {
        return this.http
            .post<User>('/api/logout', {})
            .pipe(tap(() => this.user$$.next(undefined)));
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}





//.........

// import { Injectable } from '@angular/core';
// import { User } from '../types/user';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   user: User | undefined;
//   USER_KEY = '[user]';

//   get isLogged(): boolean {
//     return !!this.user;
//   }

//   constructor() {
//     try {
//       const lsUser = localStorage.getItem(this.USER_KEY) || '';
//       this.user = JSON.parse(lsUser);
//     } catch (error) {
//       this.user = undefined;
//     }
//   }

//   login(): void {
//     this.user = {
//       email: 'john.doe@gmail.com',
//       firstName: 'John',
//     };

//     localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
//   }

//   logout(): void {
//     this.user = undefined;
//     localStorage.removeItem(this.USER_KEY);
//   }
// }