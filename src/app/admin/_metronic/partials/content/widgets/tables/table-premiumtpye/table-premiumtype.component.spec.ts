import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablePremiumTypeComponent } from './table-premiumtype.component';





describe('TablePremiumTypeComponent', () => {
  let component: TablePremiumTypeComponent;
  let fixture: ComponentFixture<TablePremiumTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePremiumTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePremiumTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
