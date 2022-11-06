import {createAction, props} from '@ngrx/store';

export const goToUrl = createAction(
  '[AppRouter/Navigation] Go To Url',
  props<{ url: string }>(),
);

export const loadAppRouterFailure = createAction(
  '[AppRouter/API] Load AppRouter Failure',
  props<{ error: any }>(),
);
