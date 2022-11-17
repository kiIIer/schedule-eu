import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GroupsActions from './groups.actions';
import { GroupsEntity } from './groups.models';

export const GROUPS_FEATURE_KEY = 'groups';

export interface GroupsState extends EntityState<GroupsEntity> {
  selectedId?: string | number; // which Groups record has been selected
  loaded: boolean; // has the Groups list been loaded
  error?: string | null; // last known error (if any)
}

export interface GroupsPartialState {
  readonly [GROUPS_FEATURE_KEY]: GroupsState;
}

export const groupsAdapter: EntityAdapter<GroupsEntity> =
  createEntityAdapter<GroupsEntity>();

export const initialGroupsState: GroupsState = groupsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialGroupsState,
  on(GroupsActions.initGroups, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GroupsActions.loadGroupsSuccess, (state, { groups }) =>
    groupsAdapter.setAll(groups, { ...state, loaded: true })
  ),
  on(GroupsActions.loadGroupsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function groupsReducer(state: GroupsState | undefined, action: Action) {
  return reducer(state, action);
}
