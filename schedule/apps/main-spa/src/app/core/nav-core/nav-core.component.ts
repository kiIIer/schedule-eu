import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'schedule-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class NavCoreComponent {

  constructor(private store: Store) {
  }

}
