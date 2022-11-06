import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainNavCoreComponent} from './main-nav-core/main-nav-core.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import * as fromContacts from './state/contacts/contacts.reducer';
import {ContactsEffects} from './state/contacts/contacts.effects';
import * as fromSchedules from './state/schedules/schedules.reducer';
import {SchedulesEffects} from './state/schedules/schedules.effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {ContactsComponent} from "./presentaion/contacts/contacts.component";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";

@NgModule({
  declarations: [AppComponent, MainNavCoreComponent, ContactsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    RouterOutlet,
    AppRoutingModule,
    StoreModule.forRoot(
      {
        router: routerReducer,
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      },
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(
      fromContacts.CONTACTS_FEATURE_KEY,
      fromContacts.contactsReducer,
    ),
    EffectsModule.forFeature([ContactsEffects]),
    StoreModule.forFeature(
      fromSchedules.SCHEDULES_FEATURE_KEY,
      fromSchedules.schedulesReducer,
    ),
    EffectsModule.forFeature([SchedulesEffects]),
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
