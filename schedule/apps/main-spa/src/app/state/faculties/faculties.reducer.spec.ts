import { Action } from '@ngrx/store';

import * as FacultiesActions from './faculties.actions';
import { FacultiesEntity } from './faculties.models';
import {
  FacultiesState,
  initialFacultiesState,
  facultiesReducer,
} from './faculties.reducer';

describe('Faculties Reducer', () => {
  const createFacultiesEntity = (id: string, name = ''): FacultiesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Faculties actions', () => {
    it('loadFacultiesSuccess should return the list of known Faculties', () => {
      const faculties = [
        createFacultiesEntity('PRODUCT-AAA'),
        createFacultiesEntity('PRODUCT-zzz'),
      ];
      const action = FacultiesActions.loadFacultiesSuccess({ faculties });

      const result: FacultiesState = facultiesReducer(
        initialFacultiesState,
        action
      );

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = facultiesReducer(initialFacultiesState, action);

      expect(result).toBe(initialFacultiesState);
    });
  });
});
