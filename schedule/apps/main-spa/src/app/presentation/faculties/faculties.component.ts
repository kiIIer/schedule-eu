import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'schedule-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class FacultiesComponent {

  @Input() facultyIds: string[] | null = [];

}
