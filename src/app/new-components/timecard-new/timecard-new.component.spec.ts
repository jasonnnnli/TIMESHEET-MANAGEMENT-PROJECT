import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecardNewComponent } from './timecard-new.component';

describe('TimecardNewComponent', () => {
  let component: TimecardNewComponent;
  let fixture: ComponentFixture<TimecardNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecardNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimecardNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
