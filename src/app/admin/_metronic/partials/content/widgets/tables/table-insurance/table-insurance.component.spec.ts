import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableInsuranceComponent } from './table-insurance.component';




describe('TableInsuranceComponent', () => {
  let component: TableInsuranceComponent;
  let fixture: ComponentFixture<TableInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
