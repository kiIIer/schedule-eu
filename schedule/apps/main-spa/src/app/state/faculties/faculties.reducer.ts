import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entity';
import {createReducer, on, Action} from '@ngrx/store';

import * as FacultiesActions from './faculties.actions';
import {FacultiesEntity} from './faculties.models';

export const FACULTIES_FEATURE_KEY = 'faculties';

export interface FacultiesState extends EntityState<FacultiesEntity> {
  selectedId?: string | number; // which Faculties record has been selected
  loaded: boolean; // has the Faculties list been loaded
  error?: string | null; // last known error (if any)
}

export interface FacultiesPartialState {
  readonly [FACULTIES_FEATURE_KEY]: FacultiesState;
}

export const facultiesAdapter: EntityAdapter<FacultiesEntity> =
  createEntityAdapter<FacultiesEntity>();

export const initialFacultiesState: FacultiesState =
  facultiesAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialFacultiesState,
  on(FacultiesActions.initFaculties, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(FacultiesActions.loadFacultiesSuccess, (state, {faculties}) =>
    facultiesAdapter.setAll(faculties, {...state, loaded: true}),
  ),
  on(FacultiesActions.loadFacultiesFailure, (state, {error}) => ({
    ...state,
    error,
  })),
);

export function facultiesReducer(
  state: FacultiesState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
