import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetTimecardComponent } from './get-timecard.component';

describe('GetTimecardComponent', () => {
  let component: GetTimecardComponent;
  let fixture: ComponentFixture<GetTimecardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetTimecardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetTimecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
