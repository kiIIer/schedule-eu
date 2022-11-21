/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as SchedulesActions from './schedules.actions';
import * as SchedulesFeature from './schedules.reducer';
import * as GroupsActions from '../groups/groups.actions';
import {map, mergeMap, withLatestFrom} from 'rxjs/operators';
import {getFacultiesEntities} from '../faculties/faculties.selectors';
import {GroupsEntity} from '../groups/groups.models';
import {SheetWorkerService} from '../../services/sheet-worker/sheet-worker.service';
import {Store} from '@ngrx/store';
import {SchedulesEntity} from './schedules.models';
import {getGroupsEntities} from '../groups/groups.selectors';
import {SchedulesState} from './schedules.reducer';
import {D} from '@angular/cdk/keycodes';
import {scheduled} from 'rxjs';

@Injectable()
export class SchedulesEffects {

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SchedulesActions.loadSchedules),
      withLatestFrom(this.store.select(getGroupsEntities)),
      mergeMap(([action, groups]) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.sheetWorker.getSheet(groups[action.groupId]!.scheduleLink, 'A:E').pipe(
          map((response) =>
            response.ok
              ? SchedulesActions.loadSchedulesSuccess({
                schedules: response.body!
                  .map((schedule) => this.addGroupLink(schedule, action.groupId))
                  .map((schedule) => this.addRandomId(schedule))
                  .map((schedule) => this.dateUpdate(schedule)),
              })
              : SchedulesActions.loadSchedulesFailure({error: response.statusText})),
        );
      }),
    ),
  );

  private addRandomId(schedule: SchedulesEntity): SchedulesEntity {
    return ({...schedule, id: crypto.randomUUID()});
  }

  private addGroupLink(schedule: SchedulesEntity, link: string): SchedulesEntity {
    return ({...schedule, groupId: link});
  }

  private dateUpdate(schedule: SchedulesEntity): SchedulesEntity {
    const dateString: string = schedule.date as unknown as string;

    const [dateComponents, timeComponents] = dateString.split(' ');

    const [day, month, year] = dateComponents.split('/');
    const [hours, minutes] = timeComponents.split(':');

    const date = new Date();

    date.setUTCFullYear(+year);
    date.setUTCMonth(+month - 1);
    date.setUTCDate(+day);
    date.setUTCHours(+hours);
    date.setUTCMinutes(+minutes);
    date.setUTCSeconds(0);
    date.setUTCMilliseconds(0);

    return {...schedule, date: date};
  }

  constructor(private readonly actions$: Actions, private sheetWorker: SheetWorkerService<SchedulesEntity>, private store: Store) {
  }
}
