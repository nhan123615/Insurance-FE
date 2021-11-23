import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterBarComponent } from './newsletter-bar.component';

describe('NewsletterBarComponent', () => {
  let component: NewsletterBarComponent;
  let fixture: ComponentFixture<NewsletterBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsletterBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsletterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
