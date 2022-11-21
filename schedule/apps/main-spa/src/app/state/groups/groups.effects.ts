import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';

import * as GroupsActions from './groups.actions';
import * as GroupsFeature from './groups.reducer';
import * as FacultiesActions from '../faculties/faculties.actions';
import {map, mergeMap, tap, withLatestFrom} from 'rxjs/operators';
import {SheetWorkerService} from '../../services/sheet-worker/sheet-worker.service';
import {GroupsEntity} from './groups.models';
import {Store} from '@ngrx/store';
import {getAllFaculties, getFacultiesEntities} from '../faculties/faculties.selectors';
import {filter} from 'rxjs';

@Injectable()
export class GroupsEffects {

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GroupsActions.loadGroups),
      withLatestFrom(this.store.select(getFacultiesEntities)),
      mergeMap(([action, faculties]) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.sheetWorker.getSheet(faculties[action.facultyId]!.groupsLink, 'A:B').pipe(
          map((response) =>
            response.ok
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              ? GroupsActions.loadGroupsSuccess({groups: this.addFacultyLink(response.body!, action.facultyId)})
              : GroupsActions.loadGroupsFailure({error: response.statusText})),
        );
      }),
    ),
  );

  private addFacultyLink(groups: GroupsEntity[], link: string): GroupsEntity[] {
    return groups.map(
      (group: GroupsEntity) => ({...group, facultyId: link}),
    );
  }

  constructor(private readonly actions$: Actions, private sheetWorker: SheetWorkerService<GroupsEntity>, private store: Store) {
  }
}
