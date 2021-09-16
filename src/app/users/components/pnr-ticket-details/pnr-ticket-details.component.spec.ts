import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnrTicketDetailsComponent } from './pnr-ticket-details.component';

describe('PnrTicketDetailsComponent', () => {
  let component: PnrTicketDetailsComponent;
  let fixture: ComponentFixture<PnrTicketDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnrTicketDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnrTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
