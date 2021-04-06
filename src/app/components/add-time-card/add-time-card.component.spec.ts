import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimeCardComponent } from './add-time-card.component';

describe('AddTimeCardComponent', () => {
  let component: AddTimeCardComponent;
  let fixture: ComponentFixture<AddTimeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTimeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
