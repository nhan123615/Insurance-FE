import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumTypeComponent } from './premium-type.component';

describe('PremiumTypeComponent', () => {
  let component: PremiumTypeComponent;
  let fixture: ComponentFixture<PremiumTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
