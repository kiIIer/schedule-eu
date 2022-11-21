import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {initFaculties} from '../../state/faculties/faculties.actions';
import {initContacts} from '../../state/contacts/contacts.actions';

@Component({
  selector: 'schedule-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  @Output() goEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() isHandset: boolean | null = null;

  constructor(private store: Store) {
  }

  test() {
    this.store.dispatch(initContacts());
  }

}
