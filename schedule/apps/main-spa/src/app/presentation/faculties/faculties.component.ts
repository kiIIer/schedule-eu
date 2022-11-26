import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'schedule-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FacultiesComponent {

  @Input() facultyIds: string[] | null = [];
  @Output() goEvent: EventEmitter<string> = new EventEmitter<string>();

  facultyGroup = new FormGroup({
      group: new FormControl(''),
    },
  );

  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.facultyGroup.valueChanges.pipe(
      map((values) => values.group),
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // eslint-disable-next-line
    return this.facultyIds!.filter(option => option.toLowerCase().includes(filterValue));
  }

  submit() {
    // eslint-disable-next-line
    if (!this.facultyIds?.includes(this.facultyGroup.value.group!)) {
      return;
    }

    this.goEvent.emit('faculties/' + this.facultyGroup.value.group);
  }
}
