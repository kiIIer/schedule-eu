import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import {asyncScheduler, catchError, filter, Observable, scheduled, switchMap, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {getAllFaculties} from '../../state/faculties/faculties.selectors';
import {getAllGroups, getSelectedGroups} from '../../state/groups/groups.selectors';
import {map, withLatestFrom} from 'rxjs/operators';
import {selectRouteParam} from '../../state/router/app-router.selectors';
import {loadGroups} from '../../state/groups/groups.actions';
import {getAllSchedules} from '../../state/schedules/schedules.selectors';
import {loadSchedules} from '../../state/schedules/schedules.actions';

@Injectable({
  providedIn: 'root'
})
export class SchedulesGuard implements CanActivate {
  constructor(private store: Store) {
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(getSelectedGroups).pipe(
      filter((groups) => groups.length != 0),
      switchMap(() => this.store.select(getAllSchedules)),
      withLatestFrom(this.store.select(selectRouteParam('group'))),
      tap(([schedules, group]) => {
        if (schedules.length == 0) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.store.dispatch(loadSchedules({groupId: group!}));
        }
      }),
      filter(([schedules]) => schedules.length != 0),
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
