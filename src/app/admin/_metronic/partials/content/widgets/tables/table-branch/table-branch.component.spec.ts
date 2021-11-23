import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableBranchComponent } from './table-branch.component';



describe('TableBranchComponent', () => {
  let component: TableBranchComponent;
  let fixture: ComponentFixture<TableBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
