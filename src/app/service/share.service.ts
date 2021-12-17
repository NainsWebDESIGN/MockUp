import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShareService {
    private sun: boolean = true;
    private sunSub = new BehaviorSubject(this.sun);
    sun$ = this.sunSub.asObservable();

    constructor() { }
    changeAny(Observer, Value) {
        this[Observer] = Value;
        this[`${Observer}Sub`].next(this[Observer]);
    }
}
