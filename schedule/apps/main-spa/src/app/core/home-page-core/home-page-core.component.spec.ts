import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCoreComponent } from './home-page-core.component';

describe('HomePageCoreComponent', () => {
  let component: HomePageCoreComponent;
  let fixture: ComponentFixture<HomePageCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
