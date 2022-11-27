import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromView from './view.reducer';

export const selectViewState = createFeatureSelector<fromView.State>(
  fromView.viewFeatureKey,
);

export const selectIsHandset = createSelector(selectViewState, (state: fromView.State) => state.isHandset);
