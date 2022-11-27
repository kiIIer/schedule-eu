import {Component, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ContactsEntity} from '../../state/contacts/contacts.models';
import {getAllContacts} from '../../state/contacts/contacts.selectors';
import {selectIsHandset} from '../../state/view/view.selectors';

@Component({
  selector: 'schedule-contacts-core',
  templateUrl: './contacts-core.component.html',
  styleUrls: ['./contacts-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactsCoreComponent {

  contacts$: Observable<ContactsEntity[]>;
  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.contacts$ = this.store.select(getAllContacts);
    this.isHandset$ = this.store.select(selectIsHandset);
  }

}
