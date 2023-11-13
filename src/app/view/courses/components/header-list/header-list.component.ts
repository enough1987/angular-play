import { Component } from '@angular/core';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss'],
})
export class HeaderListComponent {
  public search = '';

  constructor(public storeService: StoreService) {}

  public submit(e: Event) {
    e.preventDefault();
    console.log(this.search);
    this.storeService.changeSearch(this.search);
  }

  public addCourse() {
    console.log('add course');
  }
}
