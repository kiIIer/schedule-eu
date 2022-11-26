/* eslint-disable */
import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {GroupsEntity} from '../../state/groups/groups.models';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, startWith} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'schedule-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GroupsComponent {
  @Input() groups: GroupsEntity[] | null = [];
  @Output() goEvent: EventEmitter<string> = new EventEmitter<string>();


  groupGroup = new FormGroup({
      group: new FormControl(''),
    },
  );

  filteredOptions: Observable<string[]>;

  constructor() {
    this.filteredOptions = this.groupGroup.valueChanges.pipe(
      map((values) => values.group),
      startWith(''),
      map(value => this.filter(value || '')),
    );
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // eslint-disable-next-line
    return this.groups!.map((group) => group.id).filter(option => option.toLowerCase().includes(filterValue));
  }

  submit() {
    const groupIds = this.groups!.map((group) => group.id);
    const id = this.groupGroup.value.group!;

    console.log(groupIds);
    if (!groupIds.includes(id)) {
      return;
    }

    const group = this.groups?.filter((group) => group.id == id)[0];

    this.goEvent.emit('faculties/' + group!.facultyId + '/' + id);
  }
}
