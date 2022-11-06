import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as ViewActions from './view.actions';

@Injectable()
export class ViewEffects {
  constructor(private actions$: Actions) {}
}
