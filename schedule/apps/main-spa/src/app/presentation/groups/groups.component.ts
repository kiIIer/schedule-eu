import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GroupsEntity} from '../../state/groups/groups.models';

@Component({
  selector: 'schedule-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GroupsComponent {
  @Input() groups: GroupsEntity[] | null = [];
  @Output() goEvent: EventEmitter<string> = new EventEmitter<string>();
}
