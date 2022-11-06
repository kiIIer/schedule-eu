import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ContactsComponent} from "./presentaion/contacts/contacts.component";

const routes: Routes = [
  {
    path: 'contacts', component: ContactsComponent
  }
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
