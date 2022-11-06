import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadContactsSuccess} from './state/contacts/contacts.actions';
import {testData} from './state/contacts/contacts.models';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {viewHandsetOff, viewHandsetOn} from './state/view/view.actions';

@Component({
  selector: 'schedule-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'main-spa';

  constructor(private store: Store, private breakpointObserver: BreakpointObserver) {
    //TODO: remove test data
    this.store.dispatch(loadContactsSuccess({contacts: testData}));

    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(((breakpoint) => breakpoint.matches ? this.store.dispatch(viewHandsetOn()) : this.store.dispatch(viewHandsetOff())));
  }
}
