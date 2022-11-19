import {Injectable} from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import * as Http from 'http';
import {H} from '@angular/cdk/keycodes';
import {SheetResponse} from '../sheetResponse';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {FacultiesEntity} from '../../state/faculties/faculties.models';
import {KeyService} from '../key/key.service';

@Injectable({
  providedIn: 'root',
})
export class SheetWorkerService<T> {
  private readonly params: HttpParams = new HttpParams().set('key', this.key.getKey());

  private formLink(id: string, range: string) {
    return `https://sheets.googleapis.com/v4/spreadsheets/${id}/values/${range}`;
  }

  getSheet(id: string, range: string): Observable<HttpResponse<T[]>> {
    const link = this.formLink(id, range);
    return this.http.get<SheetResponse<string[]>>(link, {observe: 'response', params: this.params}).pipe(
      map((response) => {
          if (response.ok) {
            const table = response.body?.values;
            const names = table?.shift();

            const entities = table?.map((row) => {
              let entity = {};

              for (let i = 0; i < row.length; i++) {
                entity = {...entity, [names?.[i] as string]: row[i]};
              }

              return entity;
            });

            return {...response, body: entities as T[]} as HttpResponse<T[]>;
          }
          return response as unknown as HttpResponse<T[]>;
        },
      ),
    );
  }


  constructor(private http: HttpClient, private key: KeyService) {
  }
}
