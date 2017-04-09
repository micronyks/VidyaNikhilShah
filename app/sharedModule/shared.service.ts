import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    showingLoader: boolean = true;
    constructor() {
    }

    showLoader() {
        this.showingLoader = true;
    }
    hideLoader() {
        this.showingLoader = false;
    }
}