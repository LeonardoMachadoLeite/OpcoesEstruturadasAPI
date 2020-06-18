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
  @Input() operacoes: Array<Operacao> = [];

  constructor() { }

  ngOnInit(): void {
  }

  removerOperacao(evento) {
    console.log('remover operacao');
    this.operacoes = this.operacoes.filter(item => item.Ativo !== evento.operacao.Ativo);
    console.log(this.operacoes);
  }

}
