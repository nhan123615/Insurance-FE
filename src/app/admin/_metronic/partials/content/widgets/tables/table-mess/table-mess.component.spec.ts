import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableMessComponent } from './table-mess.component';




describe('TableMessComponent', () => {
  let component: TableMessComponent;
  let fixture: ComponentFixture<TableMessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
