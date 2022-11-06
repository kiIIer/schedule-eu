import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, tap} from 'rxjs';
import {ContactsEntity} from '../../state/contacts/contacts.models';
import {getAllContacts, getContactsEntities} from '../../state/contacts/contacts.selectors';

@Component({
  selector: 'schedule-contacts-core',
  templateUrl: './contacts-core.component.html',
  styleUrls: ['./contacts-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactsCoreComponent {

  contacts$: Observable<ContactsEntity[]>;

  constructor(private store: Store) {
    this.contacts$ = this.store.select(getAllContacts).pipe(tap((a) => console.log(a)));
  }

}
