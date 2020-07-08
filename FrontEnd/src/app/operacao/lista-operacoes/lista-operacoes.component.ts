import { Carteira } from './../../model/carteira';
import { OperacaoControllerComponent } from './../operacao-controller/operacao-controller.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Operacao } from 'src/app/model/operacao';

@Component({
  selector: 'app-lista-operacoes',
  templateUrl: './lista-operacoes.component.html',
  styleUrls: ['./lista-operacoes.component.scss']
})
export class ListaOperacoesComponent implements OnInit {

  @Input() StockTicker: string;
  @Input() carteira: Carteira;

  @Output() SetOperacoes = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removerOperacao(evento) {
    this.carteira.Operacoes = this.carteira.Operacoes.filter(item => item.Ativo !== evento.operacao.Ativo);
    this.SetOperacoes.emit({ Operacoes: this.carteira });
  }

  calcularCustoCarteira(evento) {
    let custo = 0;
    this.carteira.Operacoes.forEach(op => {
      custo += (op.Preco * op.Quantidade);
    });
    this.carteira.Custo = custo * -1;
  }

}
