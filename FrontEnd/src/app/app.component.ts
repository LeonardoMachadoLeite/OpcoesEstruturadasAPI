import { Carteira } from './model/carteira';
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
  operacao1: Operacao = {
    Tipo: 1,
    Quantidade: 0,
    Preco: 10.0,
    Ativo: this.opcao
  };
  operacao2: Operacao = {
    Tipo: 1,
    Quantidade: 0,
    Preco: 20.0,
    Ativo: this.opcao
  };
  carteira1: Carteira = {
    Nome: 'Carteira 1',
    Operacoes: [this.operacao1]
  };
  carteira2: Carteira = {
    Nome: 'Carteira 2',
    Operacoes: [this.operacao2]
  };
  carteiras: Array<Carteira> = [
    this.carteira1,
    this.carteira2
  ];

  title = 'Simulador de Opções Estruturadas';
  operacoes: Array<Operacao> = [];

  constructor() {

  }

  cvtString(str: string) {
    var res = str.substring(3);
    res = res.replace(',', '.');
    return Number(res);
  }

  editarCarteira(obj: any) {
    this.operacoes = obj.carteira.Operacoes;
  }

}
