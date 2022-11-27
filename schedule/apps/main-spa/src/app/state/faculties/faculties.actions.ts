import {createAction, props} from '@ngrx/store';
import {FacultiesEntity} from './faculties.models';

export const initFaculties = createAction('[Faculties Page] Init');

export const loadFacultiesSuccess = createAction(
  '[Faculties/API] Load Faculties Success',
  props<{ faculties: FacultiesEntity[] }>(),
);

export const loadFacultiesFailure = createAction(
  '[Faculties/API] Load Faculties Failure',
  props<{ error: any }>(),
);
