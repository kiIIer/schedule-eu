import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GroupsEntity} from '../../state/groups/groups.models';
import {SchedulesEntity} from '../../state/schedules/schedules.models';

@Component({
  selector: 'schedule-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScheduleComponent {
  @Input() schedules: SchedulesEntity[] | null = [];
}
