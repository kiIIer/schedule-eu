import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as ContactsActions from './contacts.actions';
import * as ContactsFeature from './contacts.reducer';

@Injectable()
export class ContactsEffects {


  constructor(private readonly actions$: Actions) {
  }
}
