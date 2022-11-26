/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {KeyService} from '../key/key.service';
import {SheetResponse} from '../sheetResponse';
import {ContactsEntity, Details} from '../../state/contacts/contacts.models';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private readonly params: HttpParams = new HttpParams().set('key', this.key.getKey());

  private formLink(id: string, range: string) {
    return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}`;
  }

  getContacts(id: string): Observable<HttpResponse<SheetResponse<ContactsEntity>>> {
    const link = this.formLink(id, 'A:Z');
    return this.http.get<SheetResponse<string[]>>(link, {observe: 'response', params: this.params}).pipe(
      map((response) => {
        if (response.ok) {
          const entities = response.body!.values.map((row, i) => {

            const name: string = row.shift()!;
            const type: string = row.shift()!;
            const details: Details[] = [];

            for (let i = 0; i < row.length; i += 2) {
              const detail: Details = {type: row[i], contact: row[i + 1]};
              details.push(detail);
            }
            const entity: ContactsEntity = {id: i, name: name, type: type,details: details};

            return entity;
          });
          (response as unknown as HttpResponse<SheetResponse<ContactsEntity>>).body!.values = entities;
        }
        return response as unknown as HttpResponse<SheetResponse<ContactsEntity>>;
      }),
    );
  }

  constructor(private http: HttpClient, private key: KeyService) {
  }
}
