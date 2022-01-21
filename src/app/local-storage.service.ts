import { Injectable } from '@angular/core';
import {map } from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import store, { StoredData } from "store2";

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  //private _dataStream$ = new BehaviorSubject<StoredData>([]);

  set<T>(key: string, value: T): void {
    console.log('Setting Store:isValid = ' + value);
    store.set(key, value);
    //this._dataStream$.next(store.getAll());
  }
  get<T>(key: string): Observable<T> {
    //this._dataStream$.next(store.getAll());
    console.log('Getting Store:isValid = ' + store.get(key));
    return store.get(key);
   
    //return this._dataStream$.pipe(map(data => data[key]));
  }
}