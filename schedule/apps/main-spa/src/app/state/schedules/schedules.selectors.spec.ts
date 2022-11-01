import { SchedulesEntity } from './schedules.models';
import {
  schedulesAdapter,
  SchedulesPartialState,
  initialSchedulesState,
} from './schedules.reducer';
import * as SchedulesSelectors from './schedules.selectors';

describe('Schedules Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getSchedulesId = (it: SchedulesEntity) => it.id;
  const createSchedulesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as SchedulesEntity);

  let state: SchedulesPartialState;

  beforeEach(() => {
    state = {
      schedules: schedulesAdapter.setAll(
        [
          createSchedulesEntity('PRODUCT-AAA'),
          createSchedulesEntity('PRODUCT-BBB'),
          createSchedulesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialSchedulesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Schedules Selectors', () => {
    it('getAllSchedules() should return the list of Schedules', () => {
      const results = SchedulesSelectors.getAllSchedules(state);
      const selId = getSchedulesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = SchedulesSelectors.getSelected(state) as SchedulesEntity;
      const selId = getSchedulesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSchedulesLoaded() should return the current "loaded" status', () => {
      const result = SchedulesSelectors.getSchedulesLoaded(state);

      expect(result).toBe(true);
    });

    it('getSchedulesError() should return the current "error" state', () => {
      const result = SchedulesSelectors.getSchedulesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
