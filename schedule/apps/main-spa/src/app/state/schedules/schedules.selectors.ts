import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  SCHEDULES_FEATURE_KEY,
  SchedulesState,
  schedulesAdapter,
} from './schedules.reducer';
import {selectRouteParam} from '../router/app-router.selectors';
import {getAllGroups} from '../groups/groups.selectors';

// Lookup the 'Schedules' feature state managed by NgRx
export const getSchedulesState = createFeatureSelector<SchedulesState>(
  SCHEDULES_FEATURE_KEY,
);

const {selectAll, selectEntities} = schedulesAdapter.getSelectors();

export const getSchedulesLoaded = createSelector(
  getSchedulesState,
  (state: SchedulesState) => state.loaded,
);

export const getSchedulesError = createSelector(
  getSchedulesState,
  (state: SchedulesState) => state.error,
);

export const getAllSchedules = createSelector(
  getSchedulesState,
  (state: SchedulesState) => selectAll(state),
);

export const getSchedulesEntities = createSelector(
  getSchedulesState,
  (state: SchedulesState) => selectEntities(state),
);

export const getSelectedSchedules = createSelector(
  getAllSchedules,
  selectRouteParam('group'),
  (schedules, group) => schedules.filter((schedule) => schedule.groupId == group),
);

export const getSelectedId = createSelector(
  getSchedulesState,
  (state: SchedulesState) => state.selectedId,
);

export const getSelected = createSelector(
  getSchedulesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined),
);
