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
                schedules: this.dateUpdate(
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  this.addGroupLink(response.body!, action.groupId),
                ),
              })
              : SchedulesActions.loadSchedulesFailure({error: response.statusText})),
        );
      }),
    ),
  );

  private addGroupLink(schedules: SchedulesEntity[], link: string): SchedulesEntity[] {
    return schedules.map(
      (schedule: SchedulesEntity) => ({...schedule, groupId: link}),
    );
  }

  private dateUpdate(schedules: SchedulesEntity[]): SchedulesEntity[] {
    return schedules.map(
      (schedule: SchedulesEntity) => {
        const dateString: string = schedule.date as unknown as string;

        const [dateComponents, timeComponents] = dateString.split(' ');

        const [month, day, year] = dateComponents.split('/');
        const [hours, minutes] = timeComponents.split(':');

        const date = new Date(+year, +month - 1, +day, +hours, +minutes, 0);

        return {...schedule, date: date};
      },
    );
  }

  constructor(private readonly actions$: Actions, private sheetWorker: SheetWorkerService<SchedulesEntity>, private store: Store) {
  }
}
