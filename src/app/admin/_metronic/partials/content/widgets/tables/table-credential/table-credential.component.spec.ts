import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableCredentialComponent } from './table-credential.component';




describe('TableCredentialComponent', () => {
  let component: TableCredentialComponent;
  let fixture: ComponentFixture<TableCredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
