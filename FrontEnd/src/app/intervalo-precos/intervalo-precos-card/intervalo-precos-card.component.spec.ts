import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaloPrecosCardComponent } from './intervalo-precos-card.component';

describe('IntervaloPrecosCardComponent', () => {
  let component: IntervaloPrecosCardComponent;
  let fixture: ComponentFixture<IntervaloPrecosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervaloPrecosCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervaloPrecosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
