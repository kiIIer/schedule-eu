import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ContactsCoreComponent} from './core/contacts-core/contacts-core.component';
import {ScheduleCoreComponent} from './core/schedule-core/schedule-core.component';
import {ContactsGuard} from './guard/contacts/contacts.guard';
import {FacultiesCoreComponent} from './core/faculties-core/faculties-core.component';
import {FacultiesGuard} from './guard/faculties/faculties.guard';
import {GroupsCoreComponent} from './core/groups-core/groups-core.component';
import {GroupsGuard} from './guard/groups/groups.guard';
import {SchedulesGuard} from './guard/schedules/schedules.guard';
import {NotFoundComponent} from './presentation/not-found/not-found.component';
import {HomePageCoreComponent} from './core/home-page-core/home-page-core.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'homepage', component: HomePageCoreComponent},
  {path: 'contacts', component: ContactsCoreComponent, canActivate: [ContactsGuard]},
  {path: 'faculties', component: FacultiesCoreComponent, canActivate: [FacultiesGuard]},
  {path: 'faculties/:faculty', component: GroupsCoreComponent, canActivate: [FacultiesGuard, GroupsGuard]},
  {
    path: 'faculties/:faculty/:group',
    component: ScheduleCoreComponent,
    canActivate: [FacultiesGuard, GroupsGuard, SchedulesGuard],
  },
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
