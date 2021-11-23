import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiumTransactionComponent } from './premium-transaction.component';

describe('PremiumTransactionComponent', () => {
  let component: PremiumTransactionComponent;
  let fixture: ComponentFixture<PremiumTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiumTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiumTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
