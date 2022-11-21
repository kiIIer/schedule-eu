import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './presentation/main-nav/main-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromContacts from './state/contacts/contacts.reducer';
import { ContactsEffects } from './state/contacts/contacts.effects';
import * as fromSchedules from './state/schedules/schedules.reducer';
import { SchedulesEffects } from './state/schedules/schedules.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { ContactsComponent } from './presentation/contacts/contacts.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavCoreComponent } from './core/nav-core/nav-core.component';
import { ContactsCoreComponent } from './core/contacts-core/contacts-core.component';
import { ScheduleCoreComponent } from './core/schedule-core/schedule-core.component';
import { AppRouterEffects } from './state/router/app-router.effects';
import * as fromView from './state/view/view.reducer';
import { ViewEffects } from './state/view/view.effects';
import * as fromFaculties from './state/faculties/faculties.reducer';
import { FacultiesEffects } from './state/faculties/faculties.effects';
import * as fromGroups from './state/groups/groups.reducer';
import { GroupsEffects } from './state/groups/groups.effects';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FacultiesCoreComponent } from './core/faculties-core/faculties-core.component';
import { FacultiesComponent } from './presentation/faculties/faculties.component';
import { GroupsCoreComponent } from './core/groups-core/groups-core.component';
import { GroupsComponent } from './presentation/groups/groups.component';
import { ScheduleComponent } from './presentation/schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    NavCoreComponent,
    ContactsCoreComponent,
    ScheduleCoreComponent,
    ContactsComponent,
    FacultiesCoreComponent,
    FacultiesComponent,
    GroupsCoreComponent,
    GroupsComponent,
    ScheduleComponent,
  ],
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
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature(
      fromContacts.CONTACTS_FEATURE_KEY,
      fromContacts.contactsReducer
    ),
    EffectsModule.forFeature([ContactsEffects, ViewEffects]),
    StoreModule.forFeature(
      fromSchedules.SCHEDULES_FEATURE_KEY,
      fromSchedules.schedulesReducer
    ),
    EffectsModule.forFeature([SchedulesEffects]),
    MatCardModule,
    MatGridListModule,
    EffectsModule.forFeature([AppRouterEffects]),
    StoreModule.forFeature(fromView.viewFeatureKey, fromView.reducer),
    StoreModule.forFeature(
      fromFaculties.FACULTIES_FEATURE_KEY,
      fromFaculties.facultiesReducer
    ),
    EffectsModule.forFeature([FacultiesEffects]),
    StoreModule.forFeature(
      fromGroups.GROUPS_FEATURE_KEY,
      fromGroups.groupsReducer
    ),
    EffectsModule.forFeature([GroupsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [HttpClientModule],
})
export class AppModule {}
