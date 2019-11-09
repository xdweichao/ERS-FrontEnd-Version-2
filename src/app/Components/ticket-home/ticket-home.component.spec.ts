import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketHomeComponent } from './ticket-home.component';

describe('TicketHomeComponent', () => {
  let component: TicketHomeComponent;
  let fixture: ComponentFixture<TicketHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
