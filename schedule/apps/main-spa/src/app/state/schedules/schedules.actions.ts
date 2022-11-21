import {createAction, props} from '@ngrx/store';
import {SchedulesEntity} from './schedules.models';

export const loadSchedules = createAction(
  '[Schedules Page] Load Schedules',
  props<{ groupId: string }>(),
);

export const loadSchedulesSuccess = createAction(
  '[Schedules/API] Load Schedules Success',
  props<{ schedules: SchedulesEntity[] }>(),
);

export const loadSchedulesFailure = createAction(
  '[Schedules/API] Load Schedules Failure',
  props<{ error: any }>(),
);
