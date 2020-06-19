import { FiltroOpcoes } from './../model/filtro-opcoes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OpcoesService } from '../services/opcoes.service';

@Component({
  selector: 'app-filtro-tabela',
  templateUrl: './filtro-tabela.component.html',
  styleUrls: ['./filtro-tabela.component.scss'],
  preserveWhitespaces: true
})
export class FiltroTabelaComponent implements OnInit {

  listaTipos: Array<string> = ['call', 'put'];
  listaVencimentos: Array<string>;
  listaTickers: Array<string> = ['PETR4', 'ITUB4', 'CSNA3'];

  filtro: FiltroOpcoes = {
    ticker: this.listaTickers[0],
    tipo: this.listaTipos[0],
    vencimento: '20/07/2020'
  };
  @Output() BuscarEvento = new EventEmitter();

  private service: OpcoesService;

  constructor(private http: HttpClient, private opcoesService: OpcoesService) {}

  ngOnInit() {
    this.opcoesService.getVencimentos('PETR4').subscribe(res => {
      this.listaVencimentos = res;
      this.filtro.vencimento = this.listaVencimentos[0];
    } );
  }

  buscar(evento) {
    console.log(this.filtro);
    this.BuscarEvento.emit({ filtro: this.filtro });
  }

}
