import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'schedule-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  @Output() goEvent: EventEmitter<string> = new EventEmitter<string>();
  @Input() isHandset: boolean | null = null;
}
