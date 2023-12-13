import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-spinner-component',
  templateUrl: './spinner-component.component.html',
  styleUrls: ['./spinner-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponentComponent {
  loading = false;

  constructor(private cd: ChangeDetectorRef, public loadingService: LoadingService) {
    loadingService.loading$.subscribe((loading) => {
      this.loading = loading;
      cd.markForCheck();
    })
  }
}
