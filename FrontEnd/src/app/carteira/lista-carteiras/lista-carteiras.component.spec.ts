import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCarteirasComponent } from './lista-carteiras.component';

describe('ListaCarteirasComponent', () => {
  let component: ListaCarteirasComponent;
  let fixture: ComponentFixture<ListaCarteirasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarteirasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCarteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
