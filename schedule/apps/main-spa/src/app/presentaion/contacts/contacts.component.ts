import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ContactsEntity} from "../../state/contacts/contacts.models";

@Component({
  selector: 'schedule-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})


export class ContactsComponent {
  //TODO: give data please and remove test data '^'
  @Input() isHandset: boolean | null = false;
  //TODO: give isHandset
  @Input() contacts: ContactsEntity[] | null = [
    {
      id: 1,
      name: 'Decan',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 2,
      name: 'Mike',
      details: [
        {
        type: 'telegram',
        contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 3,
      name: 'One',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 4,
      name: 'Two',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 5,
      name: 'Three',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 6,
      name: 'Four',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 7,
      name: 'Five',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 8,
      name: 'Six',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 9,
      name: 'Seven',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    },
    {
      id: 10,
      name: 'Eight',
      details: [
        {
          type: 'telegram',
          contact: '@123'
        },
        {
          type: 'Phone',
          contact: '+123'
        },
        {
          type: 'Email',
          contact: 'example@example.com'
        }
      ]
    }
  ]
}
