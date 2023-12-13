import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  setLoading(loading: boolean) {
    this.loading.next(loading);
  }

}
