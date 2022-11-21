import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {GroupsEntity} from '../../state/groups/groups.models';
import {getSelectedGroups} from '../../state/groups/groups.selectors';
import {goToUrl} from '../../state/router/app-router.actions';
import {SchedulesEntity} from '../../state/schedules/schedules.models';
import {getSelectedSchedules} from '../../state/schedules/schedules.selectors';
import {loadSchedules} from '../../state/schedules/schedules.actions';

@Component({
  selector: 'schedule-schedule-core',
  templateUrl: './schedule-core.component.html',
  styleUrls: ['./schedule-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScheduleCoreComponent {
  schedules$: Observable<SchedulesEntity[]>;

  constructor(private store: Store) {
    this.schedules$ = this.store.select(getSelectedSchedules);
  }

  test(){
    this.store.dispatch(loadSchedules({groupId:'221.2'}))
  }
}
