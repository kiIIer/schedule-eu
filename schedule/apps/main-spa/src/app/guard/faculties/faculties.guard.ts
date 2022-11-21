import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {asyncScheduler, catchError, filter, Observable, scheduled, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {initFaculties} from '../../state/faculties/faculties.actions';
import {getAllFaculties} from '../../state/faculties/faculties.selectors';

@Injectable({
  providedIn: 'root',
})
export class FacultiesGuard implements CanActivate {
  constructor(private store: Store) {
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(getAllFaculties).pipe(
      tap((faculties) => {
        if (faculties.length == 0) {
          this.store.dispatch(initFaculties());
        }
      }),
      filter((faculties) => faculties.length != 0),
      map(() => true),
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStore().pipe(
      catchError(() => scheduled([false], asyncScheduler)),
    );
  }
}
