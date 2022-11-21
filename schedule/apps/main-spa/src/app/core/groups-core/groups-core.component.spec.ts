import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsCoreComponent } from './groups-core.component';

describe('GroupsCoreComponent', () => {
  let component: GroupsCoreComponent;
  let fixture: ComponentFixture<GroupsCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
