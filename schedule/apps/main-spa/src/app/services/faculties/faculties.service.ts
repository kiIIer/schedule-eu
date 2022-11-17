import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FacultiesEntity} from '../../state/faculties/faculties.models';
import {LinkFormerService} from '../link-former/link-former.service';

@Injectable({
  providedIn: 'root',
})
export class FacultiesService {

  getFaculties(id: string): Observable<HttpResponse<FacultiesEntity>> {
    const link: string = this.linkFormer.formLink(id, 'A:B');

    return this.http.get<FacultiesEntity>(
      link,
      {observe: 'response'},
    );
  }


  constructor(private http: HttpClient, private linkFormer: LinkFormerService) {
  }
}
