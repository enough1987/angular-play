import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  search = new Subject<string>()

  search$ = this.search.asObservable();
  changeSearch(text: string) {
    this.search.next(text);
  }
}
