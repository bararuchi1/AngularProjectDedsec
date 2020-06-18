import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HeaderElements {
    headerLinkDetails = new BehaviorSubject({ home: "HOME" });;


    constructor() {

    }

    public setValue(value) {
        this.headerLinkDetails.next(value);
    }

    public getValue() {
        return this.headerLinkDetails.getValue();
    }

}