import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ContactsEntity} from '../../state/contacts/contacts.models';

@Component({
  selector: 'schedule-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})


export class ContactsComponent {
  @Input() isHandset: boolean | null = null;
  @Input() contacts: ContactsEntity[] | null = null;
}
