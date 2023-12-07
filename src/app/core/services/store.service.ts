import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  search = new BehaviorSubject<string>("")

  search$ = this.search.asObservable();
  changeSearch(text: string) {
    this.search.next(text);
  }
}
