export interface Contact {
  name: string;
  details: Details[];
}

export interface Details {
  type: string;
  contact: string;
}
