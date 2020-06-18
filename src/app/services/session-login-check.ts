import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable(
    {
        providedIn: 'root'
    }
) export class sessionLoginCheck {
    // checkSession() {
    //     localStorage.getItem('');
    // }
    constructor(private router: Router) { }
    public isAuthenticate(): boolean {
        const value = JSON.parse(sessionStorage.getItem('sessionValue'));
        console.log(value);
        if (value && "SUCCESS" == value.loginStatus) {
            return true;
        } else {
            this.router.navigate(['/login']);
        }
        return false;
    }
}