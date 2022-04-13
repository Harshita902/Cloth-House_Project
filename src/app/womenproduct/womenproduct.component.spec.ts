import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenproductComponent } from './womenproduct.component';

describe('WomenproductComponent', () => {
  let component: WomenproductComponent;
  let fixture: ComponentFixture<WomenproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
