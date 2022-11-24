/**
 * Interface for the 'Contacts' data
 */

export interface ContactsEntity {
  id: number; // Primary ID
  type: string;
  name: string;
  details: Details[];
}

export interface Details {
  type: string;
  contact: string;
}
