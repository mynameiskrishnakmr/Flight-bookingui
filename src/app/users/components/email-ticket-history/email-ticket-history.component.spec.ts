import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailTicketHistoryComponent } from './email-ticket-history.component';

describe('EmailTicketHistoryComponent', () => {
  let component: EmailTicketHistoryComponent;
  let fixture: ComponentFixture<EmailTicketHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailTicketHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailTicketHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
