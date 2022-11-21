import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {FacultiesEntity} from '../../state/faculties/faculties.models';
import {getFacultyIds} from '../../state/faculties/faculties.selectors';

@Component({
  selector: 'schedule-faculties-core',
  templateUrl: './faculties-core.component.html',
  styleUrls: ['./faculties-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FacultiesCoreComponent {
  faculties$: Observable<FacultiesEntity[]>;

  constructor(private store: Store) {
    this.store.select(getFacultyIds);
  }

}
