import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';

import {Router} from '@angular/router';
import {goToUrl} from './app-router.actions';
import {tap} from 'rxjs';

@Injectable()
export class AppRouterEffects {

  goto$ = createEffect(
    () => this.actions$.pipe(
      ofType(goToUrl),
      tap((action) => this.router.navigateByUrl(action.url)),
    ),
    {dispatch: false},
  );

  constructor(private readonly actions$: Actions, private router: Router) {
  }
}
