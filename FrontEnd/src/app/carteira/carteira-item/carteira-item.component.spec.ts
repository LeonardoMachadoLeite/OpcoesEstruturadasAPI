import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteiraItemComponent } from './carteira-item.component';

describe('CarteiraItemComponent', () => {
  let component: CarteiraItemComponent;
  let fixture: ComponentFixture<CarteiraItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarteiraItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteiraItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
