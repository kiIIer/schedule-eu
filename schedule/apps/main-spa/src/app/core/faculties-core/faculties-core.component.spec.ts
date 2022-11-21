import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesCoreComponent } from './faculties-core.component';

describe('FacultiesCoreComponent', () => {
  let component: FacultiesCoreComponent;
  let fixture: ComponentFixture<FacultiesCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultiesCoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultiesCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
