import { Component } from '@angular/core';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss'],
})
export class HeaderListComponent {
  public search = '';

  public submit(e: Event) {
    e.preventDefault();
    console.log(this.search);
  }

  public addCourse() {
    console.log('add course');
  }
}
