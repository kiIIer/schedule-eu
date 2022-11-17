import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LinkFormerService {
  private readonly key: string;

  formLink(id: string, range: string): string {
    return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}?key=${this.key}`;
  }

  constructor() {
    this.key = 'AIzaSyCJqwa1iYHzoKwFbKc6Dw5Yw4VnbHMFoPw';
  }
}
