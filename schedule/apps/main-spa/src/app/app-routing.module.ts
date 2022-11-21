import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ContactsCoreComponent} from './core/contacts-core/contacts-core.component';
import {ScheduleCoreComponent} from './core/schedule-core/schedule-core.component';
import {ContactsGuard} from './guard/contacts/contacts.guard';
import {FacultiesCoreComponent} from './core/faculties-core/faculties-core.component';
import {FacultiesGuard} from './guard/faculties/faculties.guard';

const routes: Routes = [
  {path: 'contacts', component: ContactsCoreComponent, canActivate: [ContactsGuard]},
  {path: 'faculties', component: FacultiesCoreComponent, canActivate: [FacultiesGuard]},
  {path: 'schedule/:group', component: ScheduleCoreComponent},
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
