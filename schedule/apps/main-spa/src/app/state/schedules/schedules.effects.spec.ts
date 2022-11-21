import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as SchedulesActions from './schedules.actions';
import { SchedulesEffects } from './schedules.effects';

describe('SchedulesEffects', () => {
  let actions: Observable<Action>;
  let effects: SchedulesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        SchedulesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(SchedulesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: SchedulesActions.loadSchedules() });

      const expected = hot('-a-|', {
        a: SchedulesActions.loadSchedulesSuccess({ schedules: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
