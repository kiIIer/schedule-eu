import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'schedule-schedule-core',
  templateUrl: './schedule-core.component.html',
  styleUrls: ['./schedule-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ScheduleCoreComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

}
