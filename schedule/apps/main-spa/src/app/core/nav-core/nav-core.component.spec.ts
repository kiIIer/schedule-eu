import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCoreComponent } from './nav-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('NavCoreComponent', () => {
  let component: NavCoreComponent;
  let fixture: ComponentFixture<NavCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ NavCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
