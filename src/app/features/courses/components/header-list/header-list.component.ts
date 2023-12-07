import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '@core/services/store.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderListComponent {
  public search = '';

  constructor(private router: Router, public storeService: StoreService) {}

  public submit(e: Event) {
    e.preventDefault();
    this.storeService.changeSearch(this.search);
  }

  public addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
