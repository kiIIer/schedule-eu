import {Component, ViewEncapsulation} from '@angular/core';
import {selectIsHandset} from '../../state/view/view.selectors';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'schedule-home-page-core',
  templateUrl: './home-page-core.component.html',
  styleUrls: ['./home-page-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomePageCoreComponent {

  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.isHandset$ = this.store.select(selectIsHandset);
  }

}
