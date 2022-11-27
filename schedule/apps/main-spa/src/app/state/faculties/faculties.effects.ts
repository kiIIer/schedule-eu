import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';

import * as FacultiesActions from './faculties.actions';
import {SheetWorkerService} from '../../services/sheet-worker/sheet-worker.service';
import {FacultiesEntity} from './faculties.models';
import {environment} from '../../../environments/environment';
import {map, mergeMap} from 'rxjs/operators';

@Injectable()
export class FacultiesEffects {
  private readonly facultiesLink: string = environment.faculties;

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FacultiesActions.initFaculties),
      mergeMap(() => {
        return this.sheetWorker.getSheet(this.facultiesLink, 'A:B').pipe(
          map((response) =>
            response.ok
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ? FacultiesActions.loadFacultiesSuccess({faculties: response.body!})
              : FacultiesActions.loadFacultiesFailure({error: response.statusText})),
        );
      }),
    ),
  );

  constructor(private readonly actions$: Actions, private sheetWorker: SheetWorkerService<FacultiesEntity>) {
  }
}
