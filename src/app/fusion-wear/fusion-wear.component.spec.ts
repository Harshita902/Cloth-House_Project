import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionWearComponent } from './fusion-wear.component';

describe('FusionWearComponent', () => {
  let component: FusionWearComponent;
  let fixture: ComponentFixture<FusionWearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionWearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionWearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
