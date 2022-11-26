import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {getFacultyIds} from '../../state/faculties/faculties.selectors';
import {goToUrl} from '../../state/router/app-router.actions';
import {getAllGroups, getSelectedGroups} from '../../state/groups/groups.selectors';
import {GroupsEntity} from '../../state/groups/groups.models';
import {selectIsHandset} from "../../state/view/view.selectors";

@Component({
  selector: 'schedule-groups-core',
  templateUrl: './groups-core.component.html',
  styleUrls: ['./groups-core.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class GroupsCoreComponent {
  groups$: Observable<GroupsEntity[]>;
  isHandset$: Observable<boolean>;

  constructor(private store: Store) {
    this.groups$ = this.store.select(getSelectedGroups);
    this.isHandset$ = this.store.select(selectIsHandset);
  }

  goTo(url: string) {
    this.store.dispatch(goToUrl({url: url}));
  }
}
