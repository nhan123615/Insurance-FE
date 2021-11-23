import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableSubscriptionComponent } from './table-subscription.component';





describe('TableSubscriptionComponent', () => {
  let component: TableSubscriptionComponent;
  let fixture: ComponentFixture<TableSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
