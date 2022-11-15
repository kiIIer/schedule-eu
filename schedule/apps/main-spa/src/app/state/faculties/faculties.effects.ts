import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as FacultiesActions from './faculties.actions';
import * as FacultiesFeature from './faculties.reducer';

@Injectable()
export class FacultiesEffects {

  constructor(private readonly actions$: Actions) {
  }
}
