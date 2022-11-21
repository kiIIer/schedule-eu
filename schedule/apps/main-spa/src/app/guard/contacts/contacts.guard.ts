import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {asyncScheduler, catchError, filter, Observable, scheduled, switchMap, tap} from 'rxjs';
import {Store} from '@ngrx/store';
import {getAllContacts} from '../../state/contacts/contacts.selectors';
import {initContacts} from '../../state/contacts/contacts.actions';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ContactsGuard implements CanActivate {

  constructor(private store: Store) {
  }

  private checkStore(): Observable<boolean> {
    return this.store.select(getAllContacts).pipe(
      tap((contacts) => {
        if (contacts.length == 0) {
          this.store.dispatch(initContacts());
        }
      }),
      filter((contacts) => contacts.length != 0),
      map((contacts) => true),
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
