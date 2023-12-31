import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTilesComponent } from './dashboard-tiles.component';

describe('DashboardTilesComponent', () => {
  let component: DashboardTilesComponent;
  let fixture: ComponentFixture<DashboardTilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTilesComponent]
    });
    fixture = TestBed.createComponent(DashboardTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
