import { OperacaoControllerComponent } from './../operacao-controller/operacao-controller.component';
import { Component, OnInit, Input } from '@angular/core';
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

}
