import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCoreComponent } from './contacts-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ContactsCoreComponent', () => {
  let component: ContactsCoreComponent;
  let fixture: ComponentFixture<ContactsCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ContactsCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
