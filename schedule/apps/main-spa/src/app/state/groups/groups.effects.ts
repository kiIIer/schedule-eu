import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as GroupsActions from './groups.actions';
import * as GroupsFeature from './groups.reducer';

@Injectable()
export class GroupsEffects {

  constructor(private readonly actions$: Actions) {
  }
}
