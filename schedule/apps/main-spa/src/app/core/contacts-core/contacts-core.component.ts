import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'schedule-contacts-core',
  templateUrl: './contacts-core.component.html',
  styleUrls: ['./contacts-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ContactsCoreComponent {

  constructor(private store: Store) {
  }

}
