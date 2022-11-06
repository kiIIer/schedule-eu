import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {goToUrl} from '../../state/router/app-router.actions';

@Component({
  selector: 'schedule-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavCoreComponent {

  constructor(private store: Store) {
  }

  goTo(url: string) {
    this.store.dispatch(goToUrl({url: url}));
  }

}
