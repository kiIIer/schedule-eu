import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';

import {RouterModule} from '@angular/router';

@Injectable()
export class AppRouterEffects {

  goto$ = createEffect(
    () => this.actions$.pipe(
      ofType(RouterActions.routerGoTo),
      tap((action) => this.router.navigateByUrl(action.url)),
    ),
    {dispatch: false},
  );

  constructor(private readonly actions$: Actions, private router: RouterModule) {
  }
}
