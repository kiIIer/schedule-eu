import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadContactsSuccess} from './state/contacts/contacts.actions';
import {testData} from './state/contacts/contacts.models';

@Component({
  selector: 'schedule-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'main-spa';

  constructor(private store: Store) {
    //TODO: remove test data
    store.dispatch(loadContactsSuccess({contacts: testData}));
  }
}
