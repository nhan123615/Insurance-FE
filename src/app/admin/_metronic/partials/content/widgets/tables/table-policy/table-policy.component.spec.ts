import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePolicyComponent } from './table-policy.component';

describe('TablePolicyComponent', () => {
  let component: TablePolicyComponent;
  let fixture: ComponentFixture<TablePolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
