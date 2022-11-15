import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as FacultiesActions from './faculties.actions';
import { FacultiesEffects } from './faculties.effects';

describe('FacultiesEffects', () => {
  let actions: Observable<Action>;
  let effects: FacultiesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        FacultiesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(FacultiesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: FacultiesActions.initFaculties() });

      const expected = hot('-a-|', {
        a: FacultiesActions.loadFacultiesSuccess({ faculties: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
