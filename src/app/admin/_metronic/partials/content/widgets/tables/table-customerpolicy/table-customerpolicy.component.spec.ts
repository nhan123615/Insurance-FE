import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustomerPolicyComponent } from './table-customerpolicy.component';

describe('TableCustomerPolicyComponent', () => {
  let component: TableCustomerPolicyComponent;
  let fixture: ComponentFixture<TableCustomerPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustomerPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustomerPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
