import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaOpcoesComponent } from './tabela-opcoes.component';

describe('TabelaOpcoesComponent', () => {
  let component: TabelaOpcoesComponent;
  let fixture: ComponentFixture<TabelaOpcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaOpcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
