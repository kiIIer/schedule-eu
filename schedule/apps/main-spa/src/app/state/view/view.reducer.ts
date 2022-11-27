import {createReducer, on} from '@ngrx/store';
import * as ViewActions from './view.actions';

export const viewFeatureKey = 'view';

export interface State {
  isHandset: boolean;
}

export const initialState: State = {
  isHandset: false,
};

export const reducer = createReducer(
  initialState,

  on(ViewActions.viewHandsetOn, state => ({
    ...state,
    isHandset: true,
  })),
  on(ViewActions.viewHandsetOff, state => ({
    ...state,
    isHandset: false,
  })),
);
