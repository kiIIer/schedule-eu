import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {goToUrl} from '../../state/router/app-router.actions';
import {Observable} from 'rxjs';
import {selectIsHandset} from '../../state/view/view.selectors';

@Component({
  selector: 'schedule-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavCoreComponent {

  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.isHandset$ = this.store.select(selectIsHandset);
  }

  goTo(url: string) {
    this.store.dispatch(goToUrl({url: url}));
  }

}
