import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';

@Injectable()
export class ViewEffects {
  constructor(private actions$: Actions) {
  }
}
