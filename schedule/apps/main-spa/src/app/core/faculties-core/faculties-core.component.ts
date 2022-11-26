import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {getFacultyIds} from '../../state/faculties/faculties.selectors';
import {selectIsHandset} from '../../state/view/view.selectors';
import {goToUrl} from '../../state/router/app-router.actions';

@Component({
  selector: 'schedule-faculties-core',
  templateUrl: './faculties-core.component.html',
  styleUrls: ['./faculties-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FacultiesCoreComponent {
  faculties$: Observable<string[]>;
  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.faculties$ = this.store.select(getFacultyIds);
    this.isHandset$ = this.store.select(selectIsHandset);
  }

  goTo(url: string) {
    this.store.dispatch(goToUrl({url: url}));
  }

}
