import { Component } from '@angular/core';
import { Operacao } from './model/operacao';
import { Opcao } from './model/opcao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  opcao: Opcao = {
    Opcao: 1,
    StockTicker: 'PETR4',
    Ticker: 'PETRS189',
    Deadline: '120/07/2020',
    Strike: 18.99,
    DireitoCompraVenda: 1,
    TipoOpcao: 1
  };
  operacao: Operacao = {
    Tipo: 1,
    Quantidade: 0,
    Preco: 40.0,
    Ativo: this.opcao
  };

  title = 'FrontEnd';
  operacoes: Array<Operacao> = [
    this.operacao,
    this.operacao
  ];

  constructor() {

  }
}
