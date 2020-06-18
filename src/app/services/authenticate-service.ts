import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { sessionLoginCheck } from "../services/session-login-check"
@Injectable(
    { providedIn: 'root' }
)
export class authenticateService implements CanActivate {
    constructor(private logInSession: sessionLoginCheck) { }
    canActivate(): boolean {
        if (!this.logInSession.isAuthenticate()) {
            return false;
        }
        return true;
    }

}