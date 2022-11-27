/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {asyncScheduler, catchError, filter, Observable, scheduled, switchMap, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {getAllFaculties} from '../../state/faculties/faculties.selectors';
import {map, withLatestFrom} from 'rxjs/operators';
import {getSelectedGroups} from '../../state/groups/groups.selectors';
import {selectRouteParam} from '../../state/router/app-router.selectors';
import {loadGroups} from '../../state/groups/groups.actions';

@Injectable({
  providedIn: 'root',
})
export class GroupsGuard implements CanActivate {
  constructor(private store: Store) {
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(getAllFaculties).pipe(
      filter((faculties) => faculties.length != 0),
      switchMap(() => this.store.select(getSelectedGroups)),
      withLatestFrom(this.store.select(selectRouteParam('faculty'))),
      tap(([groups, faculty]) => {
        if (groups.length == 0) {
          this.store.dispatch(loadGroups({facultyId: faculty!}));
        }
      }),
      filter(([groups]) => groups.length != 0),
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
