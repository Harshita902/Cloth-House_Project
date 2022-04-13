import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepWearComponent } from './sleep-wear.component';

describe('SleepWearComponent', () => {
  let component: SleepWearComponent;
  let fixture: ComponentFixture<SleepWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SleepWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
