import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOperacoesComponent } from './lista-operacoes.component';

describe('ListaOperacoesComponent', () => {
  let component: ListaOperacoesComponent;
  let fixture: ComponentFixture<ListaOperacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaOperacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOperacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
