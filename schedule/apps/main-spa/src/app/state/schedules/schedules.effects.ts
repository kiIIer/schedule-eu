import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as SchedulesActions from './schedules.actions';
import * as SchedulesFeature from './schedules.reducer';

@Injectable()
export class SchedulesEffects {

  constructor(private readonly actions$: Actions) {
  }
}
