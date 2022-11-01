import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as SchedulesActions from './schedules.actions';
import { SchedulesEntity } from './schedules.models';

export const SCHEDULES_FEATURE_KEY = 'schedules';

export interface SchedulesState extends EntityState<SchedulesEntity> {
  selectedId?: string | number; // which Schedules record has been selected
  loaded: boolean; // has the Schedules list been loaded
  error?: string | null; // last known error (if any)
}

export interface SchedulesPartialState {
  readonly [SCHEDULES_FEATURE_KEY]: SchedulesState;
}

export const schedulesAdapter: EntityAdapter<SchedulesEntity> =
  createEntityAdapter<SchedulesEntity>();

export const initialSchedulesState: SchedulesState =
  schedulesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialSchedulesState,
  on(SchedulesActions.initSchedules, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(SchedulesActions.loadSchedulesSuccess, (state, { schedules }) =>
    schedulesAdapter.setAll(schedules, { ...state, loaded: true })
  ),
  on(SchedulesActions.loadSchedulesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function schedulesReducer(
  state: SchedulesState | undefined,
  action: Action
) {
  return reducer(state, action);
}
