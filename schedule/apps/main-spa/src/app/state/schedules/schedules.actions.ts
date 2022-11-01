import { createAction, props } from '@ngrx/store';
import { SchedulesEntity } from './schedules.models';

export const initSchedules = createAction('[Schedules Page] Init');

export const loadSchedulesSuccess = createAction(
  '[Schedules/API] Load Schedules Success',
  props<{ schedules: SchedulesEntity[] }>()
);

export const loadSchedulesFailure = createAction(
  '[Schedules/API] Load Schedules Failure',
  props<{ error: any }>()
);
