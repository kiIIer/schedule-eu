import { FacultiesEntity } from './faculties.models';
import {
  facultiesAdapter,
  FacultiesPartialState,
  initialFacultiesState,
} from './faculties.reducer';
import * as FacultiesSelectors from './faculties.selectors';

describe('Faculties Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getFacultiesId = (it: FacultiesEntity) => it.id;
  const createFacultiesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as FacultiesEntity);

  let state: FacultiesPartialState;

  beforeEach(() => {
    state = {
      faculties: facultiesAdapter.setAll(
        [
          createFacultiesEntity('PRODUCT-AAA'),
          createFacultiesEntity('PRODUCT-BBB'),
          createFacultiesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialFacultiesState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Faculties Selectors', () => {
    it('getAllFaculties() should return the list of Faculties', () => {
      const results = FacultiesSelectors.getAllFaculties(state);
      const selId = getFacultiesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = FacultiesSelectors.getSelected(state) as FacultiesEntity;
      const selId = getFacultiesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getFacultiesLoaded() should return the current "loaded" status', () => {
      const result = FacultiesSelectors.getFacultiesLoaded(state);

      expect(result).toBe(true);
    });

    it('getFacultiesError() should return the current "error" state', () => {
      const result = FacultiesSelectors.getFacultiesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
