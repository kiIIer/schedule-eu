import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {viewHandsetOff, viewHandsetOn} from './state/view/view.actions';

@Component({
  selector: 'schedule-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'main-spa';

  constructor(private store: Store, private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe(Breakpoints.Handset)
      .subscribe(((breakpoint) => breakpoint.matches ? this.store.dispatch(viewHandsetOn()) : this.store.dispatch(viewHandsetOff())));
  }
}
