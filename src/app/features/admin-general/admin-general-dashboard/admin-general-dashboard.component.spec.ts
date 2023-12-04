import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGeneralDashboardComponent } from './admin-general-dashboard.component';

describe('AdminGeneralDashboardComponent', () => {
  let component: AdminGeneralDashboardComponent;
  let fixture: ComponentFixture<AdminGeneralDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGeneralDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminGeneralDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
