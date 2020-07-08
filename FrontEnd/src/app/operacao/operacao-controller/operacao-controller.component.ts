import { Acao } from './../../model/acao';
import { Operacao } from 'src/app/model/operacao';
import { OpcaoScrapper } from './../../model/opcao-scrapper.model';
import { Opcao } from './../../model/opcao';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operacao-controller',
  templateUrl: './operacao-controller.component.html',
  styleUrls: ['./operacao-controller.component.scss']
})
export class OperacaoControllerComponent implements OnInit {

  @Input() StockTicker: string = 'PETR4';
  opcao: Opcao = {
    Opcao: 1,
    StockTicker: 'PETR4',
    Ticker: 'PETRS189',
    Deadline: '120/07/2020',
    Strike: 18.99,
    DireitoCompraVenda: 1,
    TipoOpcao: 1
  };
  @Input() operacao: Operacao = {
    Quantidade: 0,
    Preco: 40.0,
    Ativo: this.opcao
  };

  @Output() atualizarCusto = new EventEmitter();
  @Output() removerOperacao = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onClickMais() {
    this.operacao.Quantidade += 100;
    this.atualizarCusto.emit();
  }

  onClickMenos() {
    this.operacao.Quantidade -= 100;
    this.atualizarCusto.emit();
  }

  onClickRemover(evento) {
    this.removerOperacao.emit({ operacao: this.operacao });
  }

  cvtOpcao(acao: Acao) {
    return acao as Opcao;
  }

}
