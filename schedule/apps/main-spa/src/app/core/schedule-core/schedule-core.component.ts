import {Component, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SchedulesEntity} from '../../state/schedules/schedules.models';
import {getSelectedSchedules} from '../../state/schedules/schedules.selectors';
import {selectIsHandset} from '../../state/view/view.selectors';

@Component({
  selector: 'schedule-schedule-core',
  templateUrl: './schedule-core.component.html',
  styleUrls: ['./schedule-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScheduleCoreComponent {
  schedules$: Observable<SchedulesEntity[]>;
  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.schedules$ = this.store.select(getSelectedSchedules);
    this.isHandset$ = this.store.select(selectIsHandset);
  }
}
