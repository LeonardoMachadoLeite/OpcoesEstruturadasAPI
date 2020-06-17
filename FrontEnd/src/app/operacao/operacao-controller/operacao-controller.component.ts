import { OpcaoScrapper } from './../../model/opcao-scrapper.model';
import { Operacao } from './../../model/operacao';
import { Opcao } from './../../model/opcao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-operacao-controller',
  templateUrl: './operacao-controller.component.html',
  styleUrls: ['./operacao-controller.component.scss']
})
export class OperacaoControllerComponent implements OnInit {

  @Input() StockTicker: string = 'PETR4';
  @Input() opcaoScrapper: OpcaoScrapper;
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

  constructor() { }

  ngOnInit(): void {
    if (this.opcaoScrapper != null) {
      this.opcao = {
        Opcao: 1,
        StockTicker: this.StockTicker,
        Ticker: this.opcaoScrapper.SERIE,
        Deadline: this.opcaoScrapper.VENCIMENTO,
        Strike: this.cvtString(this.opcaoScrapper.STRIKE),
        DireitoCompraVenda: 1,
        TipoOpcao: 1
      };
      this.operacao = {
        Tipo: 1,
        Quantidade: 0,
        Preco: 40.0,
        Ativo: this.opcao
      }
    }
  }

  onClickMais() {
    this.operacao.Quantidade += 100;
  }

  onClickMenos() {
    this.operacao.Quantidade -= 100;
  }

  onClickRemover() {

  }

  cvtString(str: string) {
    var res = str.substring(3);
    res = res.replace(',', '.');
    return Number(res);
  }

}
