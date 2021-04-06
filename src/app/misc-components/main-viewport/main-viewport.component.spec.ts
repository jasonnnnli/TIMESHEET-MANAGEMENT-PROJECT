import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainViewportComponent } from './main-viewport.component';

describe('MainViewportComponent', () => {
  let component: MainViewportComponent;
  let fixture: ComponentFixture<MainViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainViewportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
