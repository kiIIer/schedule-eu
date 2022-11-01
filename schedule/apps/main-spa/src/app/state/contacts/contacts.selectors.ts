import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  CONTACTS_FEATURE_KEY,
  ContactsState,
  contactsAdapter,
} from './contacts.reducer';

// Lookup the 'Contacts' feature state managed by NgRx
export const getContactsState =
  createFeatureSelector<ContactsState>(CONTACTS_FEATURE_KEY);

const {selectAll, selectEntities} = contactsAdapter.getSelectors();

export const getContactsLoaded = createSelector(
  getContactsState,
  (state: ContactsState) => state.loaded,
);

export const getContactsError = createSelector(
  getContactsState,
  (state: ContactsState) => state.error,
);

export const getAllContacts = createSelector(
  getContactsState,
  (state: ContactsState) => selectAll(state),
);

export const getContactsEntities = createSelector(
  getContactsState,
  (state: ContactsState) => selectEntities(state),
);
