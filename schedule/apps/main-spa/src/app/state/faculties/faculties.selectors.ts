import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  FACULTIES_FEATURE_KEY,
  FacultiesState,
  facultiesAdapter,
} from './faculties.reducer';

// Lookup the 'Faculties' feature state managed by NgRx
export const getFacultiesState = createFeatureSelector<FacultiesState>(
  FACULTIES_FEATURE_KEY
);

const { selectAll, selectEntities } = facultiesAdapter.getSelectors();

export const getFacultiesLoaded = createSelector(
  getFacultiesState,
  (state: FacultiesState) => state.loaded
);

export const getFacultiesError = createSelector(
  getFacultiesState,
  (state: FacultiesState) => state.error
);

export const getAllFaculties = createSelector(
  getFacultiesState,
  (state: FacultiesState) => selectAll(state)
);

export const getFacultiesEntities = createSelector(
  getFacultiesState,
  (state: FacultiesState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getFacultiesState,
  (state: FacultiesState) => state.selectedId
);

export const getSelected = createSelector(
  getFacultiesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
