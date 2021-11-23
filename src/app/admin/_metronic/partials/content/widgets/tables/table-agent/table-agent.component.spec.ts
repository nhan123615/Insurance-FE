import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAgentComponent } from './table-agent.component';

describe('TableAgentComponent', () => {
  let component: TableAgentComponent;
  let fixture: ComponentFixture<TableAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
