import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTeam1Component } from './our-team1.component';

describe('OurTeam1Component', () => {
  let component: OurTeam1Component;
  let fixture: ComponentFixture<OurTeam1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurTeam1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurTeam1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
