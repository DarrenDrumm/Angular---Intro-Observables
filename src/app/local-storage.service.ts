import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import store, { StoredData } from "store2";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private _dataStream$ = new BehaviorSubject<StoredData>([]); //Stream
  data = this._dataStream$.asObservable(); // Encapsulation: Allows access to the _dataStream$ data value in the subcribed component but does not give access to the .next() method.

  set<T>(key: string, value: T): void {
    console.log('Setting Store: ' + key + ' = ' + value);
    store.set(key, value);
    this._dataStream$.next(store);
  }
  get<T>(key: string): Observable<T> {
    console.log('Getting Store: ' + key + ' = ' + this._dataStream$.pipe(store1 => store1[key]));
    return this._dataStream$.pipe(store1 => store1[key]);
  }
}