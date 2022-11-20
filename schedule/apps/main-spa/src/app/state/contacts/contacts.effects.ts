import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as ContactsActions from './contacts.actions';
import * as ContactsFeature from './contacts.reducer';
import * as FacultiesActions from '../faculties/faculties.actions';
import {map, mergeMap} from 'rxjs/operators';
import {ContactsService} from '../../services/contacts/contacts.service';
import {environment} from '../../../environments/environment';

@Injectable()
export class ContactsEffects {

  private readonly contactsLink: string = environment.contacts;

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ContactsActions.initContacts),
      mergeMap((action) => {
        return this.contacts.getContacts(this.contactsLink).pipe(
          map((response) =>
            response.ok
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ? ContactsActions.loadContactsSuccess({contacts: response.body!.values})
              : ContactsActions.loadContactsFailure({error: response.statusText})),
        );
      }),
    ),
  );

  constructor(private readonly actions$: Actions, private contacts: ContactsService) {
  }
}
