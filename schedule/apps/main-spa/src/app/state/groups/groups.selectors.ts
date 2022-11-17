import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GROUPS_FEATURE_KEY,
  GroupsState,
  groupsAdapter,
} from './groups.reducer';

// Lookup the 'Groups' feature state managed by NgRx
export const getGroupsState =
  createFeatureSelector<GroupsState>(GROUPS_FEATURE_KEY);

const { selectAll, selectEntities } = groupsAdapter.getSelectors();

export const getGroupsLoaded = createSelector(
  getGroupsState,
  (state: GroupsState) => state.loaded
);

export const getGroupsError = createSelector(
  getGroupsState,
  (state: GroupsState) => state.error
);

export const getAllGroups = createSelector(
  getGroupsState,
  (state: GroupsState) => selectAll(state)
);

export const getGroupsEntities = createSelector(
  getGroupsState,
  (state: GroupsState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGroupsState,
  (state: GroupsState) => state.selectedId
);

export const getSelected = createSelector(
  getGroupsEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
