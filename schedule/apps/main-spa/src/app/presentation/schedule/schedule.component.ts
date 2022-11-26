/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GroupsEntity} from '../../state/groups/groups.models';
import {SchedulesEntity} from '../../state/schedules/schedules.models';
import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {type} from 'os';
import {Dictionary} from '@ngrx/entity';

@Component({
  selector: 'schedule-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ScheduleComponent {
  @Input() schedules: SchedulesEntity[] | null = [];
  range = new FormGroup({
    start: new FormControl<Date | null>(null, [Validators.required]),
    end: new FormControl<Date | null>(null, [Validators.required]),
  });

  selectedSchedules: SchedulesEntity[] | undefined | null = null;

  colorMap: Dictionary<string> = {
    [1]: 'mon',
    [2]: 'tue',
    [3]: 'wed',
    [4]: 'thu',
    [5]: 'fri',
    [6]: 'sat',
    [0]: 'sun',
  };

  applyFilter() {
    if (!this.range.valid) {
      return;
    }

    this.selectedSchedules = this.schedules?.filter(
      (schedule) => {
        if (schedule.date.getTime() < this.range.value.start!.getTime()) {
          return false;
        }
        return schedule.date.getTime() <= this.range.value.end!.getTime();

      },
    );
  }
}
