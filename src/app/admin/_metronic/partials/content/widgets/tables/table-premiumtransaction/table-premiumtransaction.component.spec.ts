import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablePremiumTransactionComponent } from './table-premiumtransaction.component';




describe('TablePremiumTransactionComponent', () => {
  let component: TablePremiumTransactionComponent;
  let fixture: ComponentFixture<TablePremiumTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePremiumTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePremiumTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
