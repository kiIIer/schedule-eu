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
