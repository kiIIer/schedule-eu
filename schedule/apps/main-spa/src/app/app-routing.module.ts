import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ContactsCoreComponent} from './core/contacts-core/contacts-core.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsCoreComponent},
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
