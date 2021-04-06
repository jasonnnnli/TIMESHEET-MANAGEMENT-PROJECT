import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetSidebarComponent } from './timesheet-sidebar.component';

describe('TimesheetSidebarComponent', () => {
  let component: TimesheetSidebarComponent;
  let fixture: ComponentFixture<TimesheetSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
