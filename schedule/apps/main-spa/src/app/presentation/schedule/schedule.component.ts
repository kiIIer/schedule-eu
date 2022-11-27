/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Component, Input, ViewEncapsulation} from '@angular/core';
import {SchedulesEntity} from '../../state/schedules/schedules.models';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    end: new FormControl<Date | null>(null, []),
  });

  selectedSchedules: SchedulesEntity[] | undefined | null = null;
  @Input() isHandset: boolean | null = null;

  applyFilter() {
    if (!this.range.valid) {
      return;
    }

    if (this.range.value.end == null || (this.range.value.end.getTime() == this.range.value.start!.getTime())) {
      this.selectedSchedules = this.schedules?.filter(
        (schedule) => {
          if (schedule.date.getTime() < this.range.value.start!.getTime()) {
            return false;
          }

          return (schedule.date.getTime() - this.range.value.start!.getTime()) < 8.64e+7;
        },
      );
    } else {
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
}
