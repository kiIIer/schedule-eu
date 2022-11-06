import * as fromView from './view.reducer';
import { selectViewState } from './view.selectors';

describe('View Selectors', () => {
  it('should select the feature state', () => {
    const result = selectViewState({
      [fromView.viewFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
