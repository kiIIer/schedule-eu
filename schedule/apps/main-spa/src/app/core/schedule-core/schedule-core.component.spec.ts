import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleCoreComponent } from './schedule-core.component';
import { Store, StoreModule } from '@ngrx/store';

describe('ScheduleCoreComponent', () => {
  let component: ScheduleCoreComponent;
  let fixture: ComponentFixture<ScheduleCoreComponent>;
  let store: Store;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ ScheduleCoreComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleCoreComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
