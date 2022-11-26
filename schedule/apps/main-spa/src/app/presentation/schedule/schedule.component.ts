/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GroupsEntity} from '../../state/groups/groups.models';
import {SchedulesEntity} from '../../state/schedules/schedules.models';
import {FormControl, FormGroup} from "@angular/forms";
import {type} from "os";

@Component({
  selector: 'schedule-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScheduleComponent {
  @Input() schedules: SchedulesEntity[] | null = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
