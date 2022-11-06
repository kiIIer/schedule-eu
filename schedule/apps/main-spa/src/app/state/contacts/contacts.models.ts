/**
 * Interface for the 'Contacts' data
 */

export interface ContactsEntity {
  id: number; // Primary ID
  name: string;
  details: Details[];
}

export interface Details {
  type: string;
  contact: string;
}

export const testData: ContactsEntity[] = [
  {
    id: 1,
    name: 'Mike',
    details: [
      {
        type: 'Telegram',
        contact: '@Mike_mol',
      },
    ],
  },
];
