import { FiltroOpcoes } from './../model/filtro-opcoes';
import { Component, OnInit, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';
import { OpcaoScrapper } from '../model/opcao-scrapper.model';
import { Opcao } from '../model/opcao';
import { Operacao } from '../model/operacao';

@Component({
  selector: 'app-tabela-opcoes',
  templateUrl: './tabela-opcoes.component.html',
  styleUrls: ['./tabela-opcoes.component.scss']
})
export class TabelaOpcoesComponent implements OnInit {

  opcoes: Array<OpcaoScrapper> = [];
  filtro: FiltroOpcoes;
  @Output() adicionarOperacao = new EventEmitter();

  constructor(private http: HttpClient, private opcoesService: OpcoesService) { }

  ngOnInit(): void {}

  onEdit(opcao: OpcaoScrapper): void {

    let tipo: number;
    if (this.filtro.tipo === 'call') {
      tipo = 1;
    } else {
      tipo = -1;
    }

    let estilo: number;
    if (opcao.ESTILO === 'Europeia') {
      estilo = 0;
    } else {
      estilo = 1;
    }

    let ativo: Opcao = {
      Opcao: 1,
      StockTicker: this.filtro.ticker,
      Ticker: opcao.SERIE,
      Deadline: opcao.VENCIMENTO,
      Strike: this.cvtString(opcao.STRIKE),
      DireitoCompraVenda: tipo,
      TipoOpcao: estilo
    };
    let operacao: Operacao = {
      Quantidade: 0,
      Preco: this.cvtString(opcao.PREMIO),
      Ativo: ativo
    };

    this.adicionarOperacao.emit({ operacao });
  }

  buscar(evento) {
    this.filtro = evento.filtro;
    this.opcoesService.obterOpcoes(evento.filtro).subscribe(res => this.opcoes = this.sortOpcoes(res));
  }

  sortOpcoes(res: OpcaoScrapper[]) {
    const sortedArray: OpcaoScrapper[] = res.sort((obj1, obj2) => {
      const strike1: Number = this.cvtString(obj1.STRIKE);
      const strike2: Number = this.cvtString(obj2.STRIKE);

      if (strike1 > strike2) {
          return 1;
      }

      if (strike1 < strike2) {
          return -1;
      }

      return 0;
    });
    return sortedArray;
  }

  cvtString(str: string) {
    let res = str.substring(3);
    res = res.replace(',', '.');
    return Number(res);
  }

}
